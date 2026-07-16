import type { WorkflowDefinition } from "@/models/workflow";
import { LocalRepository } from "@/repository/LocalRepository";
import type { WorkflowRepository } from "@/repository/WorkflowRepository";

export class WorkflowService {
  private readonly repository: WorkflowRepository;

  constructor(repository?: WorkflowRepository) {
    this.repository = repository ?? new LocalRepository();
  }

  public async list(): Promise<WorkflowDefinition[]> {
    return this.repository.list();
  }

  public async getById(id: string): Promise<WorkflowDefinition | null> {
    return this.repository.getById(id);
  }

  public async save(workflow: WorkflowDefinition): Promise<void> {
    workflow.metadata.updatedAt = new Date().toISOString();

    await this.repository.save(workflow);
  }

  public async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  public async duplicate(id: string): Promise<WorkflowDefinition> {
    return this.repository.duplicate(id);
  }

  public async export(id: string): Promise<WorkflowDefinition> {
    return this.repository.export(id);
  }

  public async import(workflow: WorkflowDefinition): Promise<void> {
    await this.repository.import(workflow);
  }

  public create(name = "Untitled Workflow"): WorkflowDefinition {
    const now = new Date().toISOString();

    return {
      metadata: {
        id: crypto.randomUUID(),
        name,
        description: "",
        version: 1,
        status: "draft",
        tags: [],
        createdAt: now,
        updatedAt: now,
      },

      nodes: [],

      edges: [],

      viewport: {
        x: 0,
        y: 0,
        zoom: 1,
      },
    };
  }
}

export const workflowService = new WorkflowService();
