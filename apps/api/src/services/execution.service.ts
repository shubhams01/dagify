import { workflowRunner } from "../runtime/workflow.runner";

export class ExecutionService {

  async runWorkflow(
    workflowId: string,
  ) {

    return workflowRunner.run(
      workflowId,
    );

  }

}

export const executionService =
  new ExecutionService();