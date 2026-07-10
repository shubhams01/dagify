import { ExecutionContext, TaskResult } from "../runtime";
export type TaskHandler<T = unknown> =
  (context: ExecutionContext) => Promise<T> | T;

export interface TaskOptions {
  retries?: number;
  timeout?: number;
}

export class Task<T = unknown> {

  public readonly id: string;

  public readonly handler: TaskHandler<T>;

  public readonly retries: number;

  public readonly timeout?: number | undefined;

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

  public async execute(
    context: ExecutionContext
  ): Promise<TaskResult<T>> {

    try {

      const output =
        await this.handler(context);

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