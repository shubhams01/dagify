import { LocalExecutor } from "../executor";
import { ExecutionContext } from "./ExecutionContext";
import { DependencyResolver } from "./DependencyResolver";
import { WorkflowExecution } from "./WorkflowExecution";

export class ExecutionEngine {
  private readonly executor = new LocalExecutor();

  async run(execution: WorkflowExecution): Promise<void> {
    const workflow = execution.workflow;

    const resolver = new DependencyResolver(workflow);

    const context = new ExecutionContext(workflow.id);

    const completed = new Set<string>();

    let ready = resolver.getReadyTasks();

    while (ready.length > 0) {
      await Promise.all(
        ready.map(async (taskId) => {
          if (completed.has(taskId)) {
            return;
          }

          const task = workflow.getTask(taskId);

          const taskExecution = execution.getTask(taskId);

          taskExecution.start();

          const result = await this.executor.execute(task, context);

          if (!result.success) {
            taskExecution.fail(result.error!);

            throw result.error;
          }

          taskExecution.succeed();

          completed.add(taskId);
        }),
      );

      const unlocked: string[] = [];

      for (const taskId of ready) {
        unlocked.push(...resolver.complete(taskId));
      }

      ready = unlocked;
    }
  }
}
