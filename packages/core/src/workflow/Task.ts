import { ExecutionContext, TaskResult } from "../runtime";

export type TaskHandler<T = unknown> =
  (context: ExecutionContext) => Promise<T> | T;

export interface TaskOptions {
  retries?: number;
  timeout?: number;
}

export class Task<T = unknown> {

  public readonly id: string;

  /**
   * Executor name.
   * Examples:
   * inline
   * postgres
   * http
   * docker.build
   */
  public readonly executor: string;

  /**
   * Configuration passed to executor.
   */
  public readonly config: Record<string, unknown>;

  /**
   * Optional inline task handler.
   */
  public readonly handler?: TaskHandler<T> | undefined;

  public readonly retries: number;

  public readonly timeout?: number | undefined;

  constructor(
    id: string,
    executor: string = "inline",
    config: Record<string, unknown> = {},
    handler?: TaskHandler<T>,
    options: TaskOptions = {}
  ) {

    if (!id.trim()) {
      throw new Error("Task id cannot be empty.");
    }

    this.id = id;
    this.executor = executor;
    this.config = config;
    this.handler = handler;
    this.retries = options.retries ?? 0;
    this.timeout = options.timeout;

  }

  public async execute(
    context: ExecutionContext
  ): Promise<TaskResult<T>> {

    if (!this.handler) {
      throw new Error(
        `Task '${this.id}' does not have an inline handler.`
      );
    }

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