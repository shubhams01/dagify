"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflowService = exports.WorkflowService = void 0;
const workflow_repository_1 = require("../repositories/workflow.repository");
class WorkflowService {
    /**
     * Create a workflow.
     */
    async create(data) {
        this.validateDefinition(data.definition);
        return workflow_repository_1.workflowRepository.create(data);
    }
    /**
     * List workflows.
     */
    async findAll() {
        return workflow_repository_1.workflowRepository.findAll();
    }
    /**
     * Get workflow by id.
     */
    async findById(id) {
        const workflow = await workflow_repository_1.workflowRepository.findById(id);
        if (!workflow) {
            throw new Error(`Workflow '${id}' not found.`);
        }
        return workflow;
    }
    /**
     * Update workflow.
     */
    async update(id, data) {
        const exists = await workflow_repository_1.workflowRepository.exists(id);
        if (!exists) {
            throw new Error(`Workflow '${id}' not found.`);
        }
        if (data.definition) {
            this.validateDefinition(data.definition);
        }
        return workflow_repository_1.workflowRepository.update(id, data);
    }
    /**
     * Delete workflow.
     */
    async delete(id) {
        const exists = await workflow_repository_1.workflowRepository.exists(id);
        if (!exists) {
            throw new Error(`Workflow '${id}' not found.`);
        }
        await workflow_repository_1.workflowRepository.delete(id);
    }
    /**
     * Workflow validation.
     *
     * More validation rules will be added later.
     */
    validateDefinition(definition) {
        if (!definition.id.trim()) {
            throw new Error("Workflow id is required.");
        }
        if (!definition.name.trim()) {
            throw new Error("Workflow name is required.");
        }
        if (!definition.nodes.length) {
            throw new Error("Workflow must contain at least one node.");
        }
    }
}
exports.WorkflowService = WorkflowService;
exports.workflowService = new WorkflowService();
//# sourceMappingURL=workflow.service.js.map