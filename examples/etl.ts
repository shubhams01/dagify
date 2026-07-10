import { Workflow, Task } from "@dagify/sdk";

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const workflow = new Workflow("daily-etl");

workflow.task(
  new Task("extract", async () => {
    console.log("📥 Extracting customer data...");
    await sleep(1000);
  })
);

workflow.task(
  new Task("transform", async () => {
    console.log("⚙️ Transforming data...");
    await sleep(2000);
  })
);

workflow.task(
  new Task("load", async () => {
    console.log("📤 Loading data into warehouse...");
    await sleep(1000);
  })
);

workflow.dependsOn("transform", "extract");
workflow.dependsOn("load", "transform");

export default workflow;