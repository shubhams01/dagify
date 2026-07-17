import { Executor } from "./Executor";

export class ExecutorRegistry {

  private readonly executors =
    new Map<string, Executor>();

  register(executor: Executor): void {

    if (this.executors.has(executor.type)) {
      throw new Error(
        `Executor '${executor.type}' already registered.`
      );
    }

    this.executors.set(
      executor.type,
      executor
    );

  }

  unregister(type: string): void {

    this.executors.delete(type);

  }

  has(type: string): boolean {

    return this.executors.has(type);

  }

  get(type: string): Executor {

    const executor =
      this.executors.get(type);

    if (!executor) {
      throw new Error(
        `Executor '${type}' not found.`
      );
    }

    return executor;

  }

  getAll(): Executor[] {

    return [...this.executors.values()];

  }

}