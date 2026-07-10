import { Workflow } from "../workflow";

export class DependencyResolver {

    /**
     * Number of unresolved dependencies
     * remaining for every task.
     */
    private readonly remaining =
        new Map<string, number>();

    constructor(
        private readonly workflow: Workflow
    ) {

        for (const task of workflow.getTasks()) {

            this.remaining.set(
                task.id,
                workflow.getDependencies(task.id).length
            );

        }

    }

    /**
     * Returns every task that is
     * immediately executable.
     */
    public getReadyTasks(): string[] {

        const ready: string[] = [];

        for (const [taskId, count] of this.remaining) {

            if (count === 0) {
                ready.push(taskId);
            }

        }

        return ready;

    }

    /**
     * Marks a task as completed.
     *
     * Returns newly unlocked tasks.
     */
    public complete(taskId: string): string[] {

        const unlocked: string[] = [];

        for (const child of this.workflow.getDependents(taskId)) {

            const remaining =
                this.remaining.get(child)! - 1;

            this.remaining.set(
                child,
                remaining
            );

            if (remaining === 0) {
                unlocked.push(child);
            }

        }

        return unlocked;

    }

    /**
     * Remaining unresolved
     * dependencies.
     */
    public remainingDependencies(
        taskId: string
    ): number {

        return this.remaining.get(taskId) ?? 0;

    }

}