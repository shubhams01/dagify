import { prisma } from "../lib/prisma";

export class WorkflowRepository {
  async create(data: {
    name: string;
    description?: string;
    definition: unknown;
  }) {
    return prisma.workflow.create({
      data,
    });
  }

  async findAll() {
    return prisma.workflow.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
  }

  async findById(id: string) {
    return prisma.workflow.findUnique({
      where: {
        id,
      },
    });
  }

  async update(
    id: string,
    data: {
      name?: string;
      description?: string;
      definition?: unknown;
    },
  ) {
    return prisma.workflow.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return prisma.workflow.delete({
      where: {
        id,
      },
    });
  }
}

export const workflowRepository =
  new WorkflowRepository();