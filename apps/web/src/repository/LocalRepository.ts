const id = crypto.randomUUID();

import type { WorkflowDefinition } from "@/models/workflow";
import type { WorkflowRepository } from "./WorkflowRepository";

const STORAGE_KEY = "dagify.workflows";

export class LocalRepository implements WorkflowRepository {
  async list(): Promise<WorkflowDefinition[]> {
    const json = localStorage.getItem(STORAGE_KEY);

    if (!json) {
      return [];
    }

    return JSON.parse(json);
  }

  async getById(id: string): Promise<WorkflowDefinition | null> {
    const workflows = await this.list();

    return workflows.find((workflow) => workflow.metadata.id === id) ?? null;
  }

  async save(workflow: WorkflowDefinition): Promise<void> {
    const workflows = await this.list();

    const index = workflows.findIndex(
      (item) => item.metadata.id === workflow.metadata.id,
    );

    if (index === -1) {
      workflows.push(workflow);
    } else {
      workflows[index] = workflow;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(workflows));
  }

  async delete(id: string): Promise<void> {
    const workflows = await this.list();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(
        workflows.filter((workflow) => workflow.metadata.id !== id),
      ),
    );
  }

  async duplicate(id: string): Promise<WorkflowDefinition> {
    const workflow = await this.getById(id);

    if (!workflow) {
      throw new Error("Workflow not found.");
    }

    const copy: WorkflowDefinition = {
      ...structuredClone(workflow),

      metadata: {
        ...workflow.metadata,

        id: crypto.randomUUID(),

        name: `${workflow.metadata.name} Copy`,

        version: 1,

        createdAt: new Date().toISOString(),

        updatedAt: new Date().toISOString(),
      },
    };

    await this.save(copy);

    return copy;
  }

  async import(workflow: WorkflowDefinition): Promise<void> {
    await this.save(workflow);
  }

  async export(id: string): Promise<WorkflowDefinition> {
    const workflow = await this.getById(id);

    if (!workflow) {
      throw new Error("Workflow not found.");
    }

    return workflow;
  }
}
