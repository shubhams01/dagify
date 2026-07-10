import { Executor } from "./Executor";
import {
  Task,
  TaskContext,
  TaskResult
} from "../workflow";

export class LocalExecutor implements Executor {

  async execute<T>(
    task: Task<T>,
    context: TaskContext
  ): Promise<TaskResult<T>> {

    return task.execute(context);

  }

}