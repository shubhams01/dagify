export interface TaskResult<T = unknown> {
  success: boolean;
  output?: T;
  error?: Error;
}