"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExecutionEngine = getExecutionEngine;
const core_1 = require("@dagify/core");
let engine = null;
function getExecutionEngine() {
    if (engine) {
        return engine;
    }
    const registry = new core_1.ExecutorRegistry();
    registry.register("delay", new core_1.DelayExecutor());
    // Register custom executors here
    // registry.register("http", new HttpExecutor());
    // registry.register("postgres", new PostgresExecutor());
    engine = new core_1.ExecutionEngine(registry);
    return engine;
}
//# sourceMappingURL=execution.engine.js.map