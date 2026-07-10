import { TaskState } from "../workflow";

export class TaskExecution {
  public readonly taskId: string;

  public state: TaskState = TaskState.PENDING;

  public startedAt?: Date;

  public finishedAt?: Date;

  public error?: Error;

  constructor(taskId: string) {
    this.taskId = taskId;
  }

  start(): void {
    this.state = TaskState.RUNNING;
    this.startedAt = new Date();
  }

  succeed(): void {
    this.state = TaskState.SUCCESS;
    this.finishedAt = new Date();
  }

  fail(error: Error): void {
    this.state = TaskState.FAILED;
    this.error = error;
    this.finishedAt = new Date();
  }

  skip(): void {
    this.state = TaskState.SKIPPED;
    this.finishedAt = new Date();
  }
}