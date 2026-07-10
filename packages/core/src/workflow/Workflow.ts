import { Task } from "./Task";

export class Workflow {
  public readonly id: string;

  private readonly tasks = new Map<string, Task>();

  /**
   * dependency -> dependents
   *
   * extract -> transform
   * transform -> load
   */
  private readonly edges = new Map<string, Set<string>>();

  constructor(id: string) {
    if (!id.trim()) {
      throw new Error("Workflow id cannot be empty.");
    }

    this.id = id;
  }

  task(task: Task): this {
    if (this.tasks.has(task.id)) {
      throw new Error(`Task '${task.id}' already exists.`);
    }

    this.tasks.set(task.id, task);
    this.edges.set(task.id, new Set());

    return this;
  }

  dependsOn(taskId: string, dependencyId: string): this {
    if (!this.tasks.has(taskId)) {
      throw new Error(`Unknown task '${taskId}'.`);
    }

    if (!this.tasks.has(dependencyId)) {
      throw new Error(`Unknown dependency '${dependencyId}'.`);
    }

    this.edges.get(dependencyId)!.add(taskId);

    return this;
  }

  getTask(id: string): Task {
    const task = this.tasks.get(id);

    if (!task) {
      throw new Error(`Task '${id}' not found.`);
    }

    return task;
  }

  getTasks(): readonly Task[] {
    return [...this.tasks.values()];
  }

  getDependents(taskId: string): readonly string[] {
    return [...(this.edges.get(taskId) ?? [])];
  }

  getDependencies(taskId: string): string[] {
    const dependencies: string[] = [];

    for (const [dependency, dependents] of this.edges) {
      if (dependents.has(taskId)) {
        dependencies.push(dependency);
      }
    }

    return dependencies;
  }

  hasTask(id: string): boolean {
    return this.tasks.has(id);
  }

  get size(): number {
    return this.tasks.size;
  }
}