import { ExecutionContext, TaskResult } from "../runtime";
import { Task } from "../workflow";

export interface Executor {

  execute<T>(
    task: Task<T>,
    context: ExecutionContext
  ): Promise<TaskResult<T>>;

}