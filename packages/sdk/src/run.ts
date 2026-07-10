import {
  Workflow,
  WorkflowRuntime,
  WorkflowExecution
} from "@dagify/core";

export async function run(
  workflow: Workflow
): Promise<WorkflowExecution> {

  const runtime = new WorkflowRuntime();

  return runtime.execute(workflow);

}