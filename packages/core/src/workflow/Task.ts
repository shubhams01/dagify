import { TaskContext } from "./TaskContext";
import { TaskResult } from "./TaskResult";

export type TaskHandler<T = unknown> =
  (context: TaskContext) => Promise<T> | T;

export interface TaskOptions {
  retries?: number;
  timeout?: number;
}

export class Task<T = unknown> {
  public readonly id: string;

  public readonly handler: TaskHandler<T>;

  public readonly retries: number;

  public readonly timeout?: number;

  constructor(
    id: string,
    handler: TaskHandler<T>,
    options: TaskOptions = {}
  ) {
    if (!id.trim()) {
      throw new Error("Task id cannot be empty.");
    }

    this.id = id;
    this.handler = handler;
    this.retries = options.retries ?? 0;
    this.timeout = options.timeout;
  }

  async execute(
    context: TaskContext
  ): Promise<TaskResult<T>> {
    try {
      const output = await this.handler(context);

      return {
        success: true,
        output
      };
    } catch (error) {
      return {
        success: false,
        error: error as Error
      };
    }
  }
}