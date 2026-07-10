import { Workflow } from "../workflow";
import { RuntimeState } from "./RuntimeState";
import { TaskExecution } from "./TaskExecution";

export class WorkflowExecution {
  public readonly workflow: Workflow;

  public state = RuntimeState.CREATED;

  public readonly startedAt = new Date();

  public finishedAt?: Date;

  private readonly tasks = new Map<string, TaskExecution>();

  constructor(workflow: Workflow) {
    this.workflow = workflow;

    for (const task of workflow.getTasks()) {
      this.tasks.set(task.id, new TaskExecution(task.id));
    }
  }

  start(): void {
    this.state = RuntimeState.RUNNING;
  }

  complete(): void {
    this.state = RuntimeState.COMPLETED;
    this.finishedAt = new Date();
  }

  fail(): void {
    this.state = RuntimeState.FAILED;
    this.finishedAt = new Date();
  }

  cancel(): void {
    this.state = RuntimeState.CANCELLED;
    this.finishedAt = new Date();
  }

  getTask(taskId: string): TaskExecution {
    const execution = this.tasks.get(taskId);

    if (!execution) {
      throw new Error(`Unknown task '${taskId}'.`);
    }

    return execution;
  }

  getTasks(): readonly TaskExecution[] {
    return [...this.tasks.values()];
  }
}