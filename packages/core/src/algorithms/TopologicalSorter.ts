import { Graph } from "../graph";

export class TopologicalSorter<T> {

  sort(graph: Graph<T>): string[] {

    const inDegree = new Map<string, number>();

    const queue: string[] = [];

    const order: string[] = [];

    // initialize in-degree
    for (const node of graph.values()) {
      inDegree.set(node.id, node.inDegree);

      if (node.inDegree === 0) {
        queue.push(node.id);
      }
    }

    while (queue.length > 0) {

      const current = queue.shift()!;

      order.push(current);

      for (const child of graph.successors(current)) {

        const degree = inDegree.get(child)! - 1;

        inDegree.set(child, degree);

        if (degree === 0) {
          queue.push(child);
        }

      }

    }

    if (order.length !== graph.size) {
      throw new Error(
        "Graph contains a cycle."
      );
    }

    return order;
  }

}