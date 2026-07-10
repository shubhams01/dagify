import { Task, TaskContext, TaskResult } from "../workflow";

export interface Executor {
  execute<T>(
    task: Task<T>,
    context: TaskContext
  ): Promise<TaskResult<T>>;
}