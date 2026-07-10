import { Workflow } from "../workflow";
import { WorkflowValidator } from "../validation";

import { ExecutionEngine } from "./ExecutionEngine";
import { WorkflowExecution } from "./WorkflowExecution";

export class WorkflowRuntime {

  private readonly validator = new WorkflowValidator();

  private readonly engine = new ExecutionEngine();

  public async execute(
    workflow: Workflow
  ): Promise<WorkflowExecution> {

    this.validator.validate(workflow);

    const execution = new WorkflowExecution(workflow);

    execution.start();

    try {

      await this.engine.run(execution);

      execution.complete();

      return execution;

    } catch (error) {

      execution.fail();

      throw error;

    }

  }

}