"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const workflow_routes_1 = __importDefault(require("./workflow.routes"));
const execution_routes_1 = __importDefault(require("./execution.routes"));
const router = (0, express_1.Router)();
router.get("/health", (_, res) => {
    res.json({
        success: true,
        message: "DAGify API is running",
    });
});
router.use("/workflows", workflow_routes_1.default);
router.use("/executions", execution_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map