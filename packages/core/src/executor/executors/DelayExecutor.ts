import { ExecutionContext, TaskResult } from "../../runtime";
import { Task } from "../../workflow";
import { Executor } from "../Executor";

export class DelayExecutor implements Executor {
  public readonly type = "delay";

  public async execute(
    task: Task,
    _context: ExecutionContext
  ): Promise<TaskResult<void>> {
    const ms = Number(task.config["ms"] ?? 1000);

    await new Promise(resolve => setTimeout(resolve, ms));

    return {
      success: true,
      output: undefined
    };
  }
}