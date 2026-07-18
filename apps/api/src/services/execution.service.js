"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executionService = exports.ExecutionService = void 0;
const workflow_runner_1 = require("../runtime/workflow.runner");
class ExecutionService {
    async runWorkflow(workflowId) {
        return workflow_runner_1.workflowRunner.run(workflowId);
    }
}
exports.ExecutionService = ExecutionService;
exports.executionService = new ExecutionService();
//# sourceMappingURL=execution.service.js.map