"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflowRunner = exports.WorkflowRunner = void 0;
const node_crypto_1 = require("node:crypto");
const sdk_1 = require("@dagify/sdk");
const core_1 = require("@dagify/core");
const workflow_repository_1 = require("../repositories/workflow.repository");
const execution_engine_1 = require("./execution.engine");
class WorkflowRunner {
    async run(workflowId) {
        const record = await workflow_repository_1.workflowRepository.findById(workflowId);
        if (!record) {
            throw new Error("Workflow not found.");
        }
        const compiler = new sdk_1.WorkflowCompiler();
        const workflow = compiler.compile(record.definition);
        const context = new core_1.ExecutionContext({
            workflowId,
            runId: (0, node_crypto_1.randomUUID)(),
        });
        const engine = (0, execution_engine_1.getExecutionEngine)();
        const result = await engine.execute(workflow, context);
        return {
            workflowId,
            runId: context.runId,
            status: result.status,
            completedTasks: result.completedTasks,
            failedTasks: result.failedTasks,
            duration: result.duration,
        };
    }
}
exports.WorkflowRunner = WorkflowRunner;
exports.workflowRunner = new WorkflowRunner();
//# sourceMappingURL=workflow.runner.js.map