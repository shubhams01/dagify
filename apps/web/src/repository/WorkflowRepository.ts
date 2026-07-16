import type { WorkflowDefinition } from "@/models/workflow";

export interface WorkflowRepository {

  /**
   * Returns all workflows.
   */
  list(): Promise<WorkflowDefinition[]>;

  /**
   * Returns a workflow by id.
   */
  getById(id: string): Promise<WorkflowDefinition | null>;

  /**
   * Creates or updates a workflow.
   */
  save(workflow: WorkflowDefinition): Promise<void>;

  /**
   * Deletes a workflow.
   */
  delete(id: string): Promise<void>;

  /**
   * Duplicates a workflow.
   */
  duplicate(id: string): Promise<WorkflowDefinition>;

  /**
   * Imports a workflow.
   */
  import(workflow: WorkflowDefinition): Promise<void>;

  /**
   * Exports a workflow.
   */
  export(id: string): Promise<WorkflowDefinition>;
}