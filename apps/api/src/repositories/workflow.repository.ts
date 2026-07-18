import type { WorkflowDefinition } from "@dagify/shared";
import { prisma } from "../lib/prisma";

export interface CreateWorkflowInput {
  name: string;
  description?: string;
  definition: WorkflowDefinition;
}

export interface UpdateWorkflowInput {
  name?: string;
  description?: string;
  definition?: WorkflowDefinition;
}

export class WorkflowRepository {
  /**
   * Create a workflow.
   */
  async create(data: CreateWorkflowInput) {
    return prisma.workflow.create({
      data,
    });
  }

  /**
   * Returns lightweight workflow list.
   * Does not include definition JSON.
   */
  async findAll() {
    return prisma.workflow.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  /**
   * Returns full workflow including definition.
   */
  async findById(id: string) {
    return prisma.workflow.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * Returns true if workflow exists.
   */
  async exists(id: string): Promise<boolean> {
    const count = await prisma.workflow.count({
      where: {
        id,
      },
    });

    return count > 0;
  }

  /**
   * Update workflow.
   */
  async update(
    id: string,
    data: UpdateWorkflowInput,
  ) {
    return prisma.workflow.update({
      where: {
        id,
      },
      data,
    });
  }

  /**
   * Delete workflow.
   */
  async delete(id: string) {
    return prisma.workflow.delete({
      where: {
        id,
      },
    });
  }
}

export const workflowRepository = new WorkflowRepository();