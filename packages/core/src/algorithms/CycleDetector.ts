import { Graph } from "../graph";

export class CycleDetector<T> {
  private readonly visited = new Set<string>();
  private readonly visiting = new Set<string>();

  public hasCycle(graph: Graph<T>): boolean {
    this.visited.clear();
    this.visiting.clear();

    for (const node of graph.values()) {
      if (!this.visited.has(node.id)) {
        if (this.visit(graph, node.id)) {
          return true;
        }
      }
    }

    return false;
  }

  private visit(graph: Graph<T>, nodeId: string): boolean {
    this.visiting.add(nodeId);

    for (const neighbor of graph.successors(nodeId)) {
      if (this.visiting.has(neighbor)) {
        return true;
      }

      if (!this.visited.has(neighbor)) {
        if (this.visit(graph, neighbor)) {
          return true;
        }
      }
    }

    this.visiting.delete(nodeId);
    this.visited.add(nodeId);

    return false;
  }
}