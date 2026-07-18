"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workflow_controller_1 = require("../controllers/workflow.controller");
const router = (0, express_1.Router)();
router.get("/", workflow_controller_1.workflowController.findAll.bind(workflow_controller_1.workflowController));
router.get("/:id", workflow_controller_1.workflowController.findById.bind(workflow_controller_1.workflowController));
router.post("/", workflow_controller_1.workflowController.create.bind(workflow_controller_1.workflowController));
router.put("/:id", workflow_controller_1.workflowController.update.bind(workflow_controller_1.workflowController));
router.delete("/:id", workflow_controller_1.workflowController.delete.bind(workflow_controller_1.workflowController));
exports.default = router;
//# sourceMappingURL=workflow.routes.js.map