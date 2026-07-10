import { randomUUID } from "node:crypto";

export class ExecutionContext {
  public readonly workflowId: string;

  public readonly runId: string;

  private readonly variables = new Map<string, unknown>();

  constructor(workflowId: string) {
    this.workflowId = workflowId;
    this.runId = randomUUID();
  }

  public set(key: string, value: unknown): void {
    this.variables.set(key, value);
  }

  public get<T>(key: string): T | undefined {
    return this.variables.get(key) as T | undefined;
  }

  public has(key: string): boolean {
    return this.variables.has(key);
  }

  public delete(key: string): boolean {
    return this.variables.delete(key);
  }

  public clear(): void {
    this.variables.clear();
  }

  public entries(): ReadonlyMap<string, unknown> {
    return this.variables;
  }
}