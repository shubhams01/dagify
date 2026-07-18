"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const execution_controller_1 = require("../controllers/execution.controller");
const router = (0, express_1.Router)();
router.post("/:id/run", execution_controller_1.executionController.run.bind(execution_controller_1.executionController));
exports.default = router;
//# sourceMappingURL=execution.routes.js.map