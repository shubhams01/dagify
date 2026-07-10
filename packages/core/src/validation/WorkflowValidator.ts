import { Workflow } from "../workflow";
import { CycleDetector } from "../algorithms";

export class WorkflowValidator {

    private readonly cycleDetector =
        new CycleDetector();

    validate(
        workflow: Workflow
    ): void {

        if (workflow.size === 0) {
            throw new Error(
                "Workflow contains no tasks."
            );
        }

        if (
            this.cycleDetector.hasCycle(
                workflow.getGraph()
            )
        ) {
            throw new Error(
                "Workflow contains a cycle."
            );
        }

    }

}