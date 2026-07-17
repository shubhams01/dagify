import {
  ExecutorRegistry,
  LocalExecutor,
  DelayExecutor
} from "../executor";

import { ExecutionContext } from "./ExecutionContext";
import { DependencyResolver } from "./DependencyResolver";
import { WorkflowExecution } from "./WorkflowExecution";

export class ExecutionEngine {

  private readonly registry = new ExecutorRegistry();

  private readonly executor =
    new LocalExecutor(this.registry);

  constructor() {
    this.registry.register(
      new DelayExecutor()
    );
  }

  public registerExecutor(
    executor: any
  ): void {

    this.registry.register(
      executor
    );

  }

  async run(
    execution: WorkflowExecution
  ): Promise<void> {

    const workflow =
      execution.workflow;

    const resolver =
      new DependencyResolver(
        workflow
      );

    const context =
      new ExecutionContext(
        workflow.id
      );

    const completed =
      new Set<string>();

    let ready =
      resolver.getReadyTasks();

    while (ready.length > 0) {

      await Promise.all(

        ready.map(async taskId => {

          if (completed.has(taskId)) {
            return;
          }

          const task =
            workflow.getTask(taskId);

          const taskExecution =
            execution.getTask(taskId);

          taskExecution.start();

          const result =
            await this.executor.execute(
              task,
              context
            );

          if (!result.success) {

            taskExecution.fail(
              result.error!
            );

            throw result.error;

          }

          // Store task output in execution context
          context.set(task.id, result.output);

          taskExecution.succeed();

          completed.add(taskId);

        })

      );

      const unlocked: string[] = [];

      for (const taskId of ready) {

        unlocked.push(
          ...resolver.complete(taskId)
        );

      }

      ready = unlocked;

    }

  }

}