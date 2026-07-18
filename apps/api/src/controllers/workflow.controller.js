"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflowController = exports.WorkflowController = void 0;
const express_1 = require("express");
const workflow_service_1 = require("../services/workflow.service");
class WorkflowController {
    /**
     * POST /workflows
     */
    async create(req, res) {
        try {
            const workflow = await workflow_service_1.workflowService.create(req.body);
            return res.status(201).json(workflow);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    }
    /**
     * GET /workflows
     */
    async findAll(_, res) {
        try {
            const workflows = await workflow_service_1.workflowService.findAll();
            return res.json(workflows);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    }
    /**
     * GET /workflows/:id
     */
    async findById(req, res) {
        try {
            const workflow = await workflow_service_1.workflowService.findById(req.params.id);
            return res.json(workflow);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    }
    /**
     * PUT /workflows/:id
     */
    async update(req, res) {
        try {
            const workflow = await workflow_service_1.workflowService.update(req.params.id, req.body);
            return res.json(workflow);
        }
        catch (error) {
            return this.handleError(res, error);
        }
    }
    /**
     * DELETE /workflows/:id
     */
    async delete(req, res) {
        try {
            await workflow_service_1.workflowService.delete(req.params.id);
            return res.status(204).send();
        }
        catch (error) {
            return this.handleError(res, error);
        }
    }
    handleError(res, error) {
        if (error instanceof Error) {
            return res.status(400).json({
                message: error.message,
            });
        }
        return res.status(500).json({
            message: "Internal server error",
        });
    }
}
exports.WorkflowController = WorkflowController;
exports.workflowController = new WorkflowController();
//# sourceMappingURL=workflow.controller.js.map