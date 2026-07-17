import { workflowRepository } from "../repositories/workflow.repository";

export class WorkflowService {
  async create(
    name: string,
    description?: string,
  ) {
    const definition = {
      viewport: {
        x: 0,
        y: 0,
        zoom: 1,
      },

      nodes: [],

      edges: [],
    };

    return workflowRepository.create({
      name,
      description,
      definition,
    });
  }

  async findAll() {
    return workflowRepository.findAll();
  }

  async findById(id: string) {
    return workflowRepository.findById(id);
  }

  async update(
    id: string,
    data: {
      name?: string;
      description?: string;
      definition?: unknown;
    },
  ) {
    return workflowRepository.update(id, data);
  }

  async delete(id: string) {
    return workflowRepository.delete(id);
  }
}

export const workflowService =
  new WorkflowService();