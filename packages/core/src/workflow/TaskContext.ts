export interface TaskContext {
  workflowId: string;
  runId: string;

  variables: Map<string, unknown>;

  get<T>(key: string): T | undefined;

  set(key: string, value: unknown): void;
}

export class DefaultTaskContext implements TaskContext {
  constructor(
    public readonly workflowId: string,
    public readonly runId: string,
    public readonly variables = new Map<string, unknown>()
  ) {}

  get<T>(key: string): T | undefined {
    return this.variables.get(key) as T | undefined;
  }

  set(key: string, value: unknown): void {
    this.variables.set(key, value);
  }
}