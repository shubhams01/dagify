import { Task, Workflow } from "../packages/core/src/workflow";

const workflow = new Workflow("etl");

workflow
  .task(
    new Task("extract", async () => {
      console.log("Extract");
    })
  )
  .task(
    new Task("transform", async () => {
      console.log("Transform");
    })
  )
  .task(
    new Task("load", async () => {
      console.log("Load");
    })
  );

workflow
  .dependsOn("transform", "extract")
  .dependsOn("load", "transform");

console.log("Workflow:", workflow.id);
console.log("Tasks:", workflow.getTasks().map(t => t.id));

console.log(
  "Dependencies of load:",
  workflow.getDependencies("load")
);

console.log(
  "Dependents of extract:",
  workflow.getDependents("extract")
);