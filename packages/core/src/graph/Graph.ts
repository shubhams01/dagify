import { Node } from "./Node";

export class Graph<T> {
  private readonly nodes = new Map<string, Node<T>>();

  addNode(id: string, value: T): Node<T> {
    if (this.nodes.has(id)) {
      throw new Error(`Node '${id}' already exists.`);
    }

    const node = new Node(id, value);
    this.nodes.set(id, node);

    return node;
  }

  getNode(id: string): Node<T> {
    const node = this.nodes.get(id);

    if (!node) {
      throw new Error(`Node '${id}' not found.`);
    }

    return node;
  }

  hasNode(id: string): boolean {
    return this.nodes.has(id);
  }

  addEdge(from: string, to: string): void {
    const source = this.getNode(from);
    const target = this.getNode(to);

    if (source.hasOutgoing(to)) {
      return;
    }

    source.addOutgoing(to);
    target.addIncoming(from);
  }

  removeEdge(from: string, to: string): void {
    const source = this.getNode(from);
    const target = this.getNode(to);

    source.removeOutgoing(to);
    target.removeIncoming(from);
  }

  removeNode(id: string): void {
    const node = this.getNode(id);

    for (const parent of node.getIncoming()) {
      this.getNode(parent).removeOutgoing(id);
    }

    for (const child of node.getOutgoing()) {
      this.getNode(child).removeIncoming(id);
    }

    this.nodes.delete(id);
  }

  predecessors(id: string): readonly string[] {
    return this.getNode(id).getIncoming();
  }

  successors(id: string): readonly string[] {
    return this.getNode(id).getOutgoing();
  }

  values(): readonly Node<T>[] {
    return [...this.nodes.values()];
  }

  clear(): void {
    this.nodes.clear();
  }

  get size(): number {
    return this.nodes.size;
  }
}