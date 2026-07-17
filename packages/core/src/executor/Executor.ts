import { ExecutionContext, TaskResult } from "../runtime";
import { Task } from "../workflow";

export interface Executor {
  readonly type: string;

  execute(
    task: Task,
    context: ExecutionContext
  ): Promise<TaskResult<unknown>>;
}