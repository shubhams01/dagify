import { WorkflowDefinition } from "@dagify/shared";
import { Task, Workflow } from "@dagify/core";

export class WorkflowCompiler {

  public compile(
    definition: WorkflowDefinition
  ): Workflow {

    const workflow = new Workflow(definition.id);

    // Create Tasks
    for (const node of definition.nodes) {

      workflow.task(

        new Task(
          node.id,
          node.type,
          node.config
        )

      );

    }

    // Create Dependencies
    for (const edge of definition.edges) {

      workflow.dependsOn(
        edge.target,
        edge.source
      );

    }

    return workflow;

  }

}