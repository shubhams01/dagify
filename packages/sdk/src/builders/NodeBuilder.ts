import { WorkflowNode } from "@dagify/shared";

export class NodeBuilder<TConfig = Record<string, unknown>> {
  private readonly node: WorkflowNode<TConfig>;

  constructor(type: string, name: string) {
    this.node = {
      id: crypto.randomUUID(),
      type,
      name,
      config: {} as TConfig
    };
  }

  config(config: TConfig): this {
    this.node.config = config;
    return this;
  }

  build(): WorkflowNode<TConfig> {
    return structuredClone(this.node);
  }
}