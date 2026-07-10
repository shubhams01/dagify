import { ExecutionContext, TaskResult } from "../runtime";
import { Task } from "../workflow";
import { Executor } from "./Executor";

export class LocalExecutor implements Executor {
  public async execute<T>(
    task: Task<T>,
    context: ExecutionContext,
  ): Promise<TaskResult<T>> {
    return task.execute(context);
  }
}
