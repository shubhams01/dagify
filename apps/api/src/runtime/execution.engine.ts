import {
  ExecutionEngine,
  ExecutorRegistry,
  DelayExecutor,
} from "@dagify/core";

let engine: ExecutionEngine | null = null;

export function getExecutionEngine(): ExecutionEngine {
  if (engine) {
    return engine;
  }

  const registry = new ExecutorRegistry();

  registry.register("delay", new DelayExecutor());

  // Register custom executors here
  // registry.register("http", new HttpExecutor());
  // registry.register("postgres", new PostgresExecutor());

  engine = new ExecutionEngine(registry);

  return engine;
}