import { WorkflowValidator } from "../validation";
import { ExecutionEngine } from "./ExecutionEngine";
import { WorkflowExecution } from "./WorkflowExecution";

export class WorkflowRuntime {

  private readonly validator = new WorkflowValidator();

  private readonly engine = new ExecutionEngine();

  public async execute(
    execution: WorkflowExecution
  ): Promise<void> {

    // Validate workflow before execution
    this.validator.validate(execution.workflow);

    execution.start();

    try {

      await this.engine.run(execution);

      execution.complete();

    } catch (error) {

      execution.fail();

      throw error;

    }

  }

}