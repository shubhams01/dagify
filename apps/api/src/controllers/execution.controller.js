"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executionController = exports.ExecutionController = void 0;
const express_1 = require("express");
const execution_service_1 = require("../services/execution.service");
class ExecutionController {
    async run(req, res) {
        try {
            const result = await execution_service_1.executionService.runWorkflow(req.params.id);
            return res.status(200).json(result);
        }
        catch (error) {
            return res.status(400).json({
                message: error instanceof Error
                    ? error.message
                    : "Execution failed.",
            });
        }
    }
}
exports.ExecutionController = ExecutionController;
exports.executionController = new ExecutionController();
//# sourceMappingURL=execution.controller.js.map