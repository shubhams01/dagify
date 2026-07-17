import {
  NodeBuilder,
  WorkflowBuilder
} from "./index";

const workflow = new WorkflowBuilder("Demo Workflow");

const node1 = new NodeBuilder(
  "postgres",
  "Fetch Users"
)
  .config({
    query: "SELECT * FROM users"
  })
  .build();

const node2 = new NodeBuilder(
  "postgres",
  "Update Users"
)
  .config({
    query: "UPDATE users SET active=true"
  })
  .build();

workflow
  .addNode(node1)
  .addNode(node2)
  .connect(node1.id, node2.id);

console.log(
  JSON.stringify(workflow.build(), null, 2)
);