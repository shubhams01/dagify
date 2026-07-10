import { Graph } from "../packages/core/src/graph";

const graph = new Graph<string>();

graph.addNode("extract", "Extract");
graph.addNode("transform", "Transform");
graph.addNode("load", "Load");

graph.addEdge("extract", "transform");
graph.addEdge("transform", "load");

console.log("Nodes:", graph.size);

console.log(
  "Successors of extract:",
  graph.successors("extract")
);

console.log(
  "Predecessors of load:",
  graph.predecessors("load")
);