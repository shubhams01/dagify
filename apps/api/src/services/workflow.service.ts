import type { WorkflowDefinition } from "@dagify/shared";
import {
  workflowRepository,
  CreateWorkflowInput,
  UpdateWorkflowInput,
} from "../repositories/workflow.repository";

export class WorkflowService {
  /**
   * Create a workflow.
   */
  async create(data: CreateWorkflowInput) {
    this.validateDefinition(data.definition);

    return workflowRepository.create(data);
  }

  /**
   * List workflows.
   */
  async findAll() {
    return workflowRepository.findAll();
  }

  /**
   * Get workflow by id.
   */
  async findById(id: string) {
    const workflow = await workflowRepository.findById(id);

    if (!workflow) {
      throw new Error(`Workflow '${id}' not found.`);
    }

    return workflow;
  }

  /**
   * Update workflow.
   */
  async update(
    id: string,
    data: UpdateWorkflowInput,
  ) {
    const exists = await workflowRepository.exists(id);

    if (!exists) {
      throw new Error(`Workflow '${id}' not found.`);
    }

    if (data.definition) {
      this.validateDefinition(data.definition);
    }

    return workflowRepository.update(id, data);
  }

  /**
   * Delete workflow.
   */
  async delete(id: string) {
    const exists = await workflowRepository.exists(id);

    if (!exists) {
      throw new Error(`Workflow '${id}' not found.`);
    }

    await workflowRepository.delete(id);
  }

  /**
   * Workflow validation.
   *
   * More validation rules will be added later.
   */
  private validateDefinition(
    definition: WorkflowDefinition,
  ) {
    if (!definition.id.trim()) {
      throw new Error("Workflow id is required.");
    }

    if (!definition.name.trim()) {
      throw new Error("Workflow name is required.");
    }

    if (!definition.nodes.length) {
      throw new Error(
        "Workflow must contain at least one node.",
      );
    }
  }
}

export const workflowService =
  new WorkflowService();