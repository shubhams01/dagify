export interface WorkflowNode<TConfig = Record<string, unknown>> {
  id: string;

  type: string;

  name: string;

  config: TConfig;
}