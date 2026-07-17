import { ExecutionContext, TaskResult } from "../runtime";
import { Task } from "../workflow";
import { Executor } from "./Executor";
import { ExecutorRegistry } from "./ExecutorRegistry";

export class LocalExecutor implements Executor {

  public readonly type = "local";

  constructor(
    private readonly registry: ExecutorRegistry
  ) {}

  public async execute(
    task: Task,
    context: ExecutionContext
  ): Promise<TaskResult<unknown>> {

    // Inline task (current behavior)
    if (task.handler) {
      return task.execute(context);
    }

    // Delegate to registered executor
    const executor = this.registry.get(task.executor);

    return executor.execute(task, context);
  }
}