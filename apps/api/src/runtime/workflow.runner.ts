import { randomUUID } from "node:crypto";

import { WorkflowCompiler } from "@dagify/sdk";
import { ExecutionContext } from "@dagify/core";

import { workflowRepository } from "../repositories/workflow.repository";
import { getExecutionEngine } from "./execution.engine";

export class WorkflowRunner {
  async run(workflowId: string) {
    const record = await workflowRepository.findById(workflowId);

    if (!record) {
      throw new Error("Workflow not found.");
    }

    const compiler = new WorkflowCompiler();

    const workflow = compiler.compile(record.definition);

    const context = new ExecutionContext({
      workflowId,
      runId: randomUUID(),
    });

    const engine = getExecutionEngine();

    const result = await engine.execute(
      workflow,
      context,
    );

    return {
      workflowId,
      runId: context.runId,
      status: result.status,
      completedTasks: result.completedTasks,
      failedTasks: result.failedTasks,
      duration: result.duration,
    };
  }
}

export const workflowRunner =
  new WorkflowRunner();