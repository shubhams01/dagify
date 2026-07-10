import { WorkflowLoader } from "../loader/WorkflowLoader";
import { run } from "@dagify/sdk";

export async function runCommand(args: string[]): Promise<void> {
  const file = args[0];

  if (!file) {
    console.error("Workflow file required.");
    return;
  }

  const loader = new WorkflowLoader();

  const workflow = await loader.load(file);

  console.log("Loaded workflow:", workflow);
  console.log("Workflow type:", workflow?.constructor?.name);

  console.log();

  console.log("DAGify");
  console.log("-----------------------------");
  console.log(`Workflow : ${workflow.id}`);
  console.log();

  await run(workflow);

  console.log();
  console.log("Workflow completed.");
}
