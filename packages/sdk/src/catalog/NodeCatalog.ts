import { NodeDefinition } from "@dagify/shared";

export class NodeCatalog {
  private readonly definitions = new Map<string, NodeDefinition>();

  register(definition: NodeDefinition): void {
    if (this.definitions.has(definition.type)) {
      throw new Error(
        `Node '${definition.type}' already exists`
      );
    }

    this.definitions.set(
      definition.type,
      definition
    );
  }

  unregister(type: string): void {
    this.definitions.delete(type);
  }

  get(type: string): NodeDefinition {
    const definition =
      this.definitions.get(type);

    if (!definition) {
      throw new Error(
        `Node '${type}' not found`
      );
    }

    return definition;
  }

  getAll(): NodeDefinition[] {
    return [...this.definitions.values()];
  }

  has(type: string): boolean {
    return this.definitions.has(type);
  }

  clear(): void {
    this.definitions.clear();
  }
}