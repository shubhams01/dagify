import { api } from "./api";
import type { WorkflowDefinition } from "@/models/workflow";

export interface Workflow {
  id: string;

  name: string;

  description?: string;

  definition: WorkflowDefinition;

  createdAt: string;

  updatedAt: string;
}

export const WorkflowService = {
  create(name: string) {
    return api<Workflow>("/workflows", {
      method: "POST",

      body: JSON.stringify({
        name,
      }),
    });
  },

  findAll() {
    return api<Workflow[]>("/workflows");
  },

  findById(id: string) {
    return api<Workflow>(`/workflows/${id}`);
  },

  update(
    id: string,
    definition: WorkflowDefinition,
  ) {
    return api<Workflow>(`/workflows/${id}`, {
      method: "PUT",

      body: JSON.stringify({
        definition,
      }),
    });
  },

  delete(id: string) {
    return api<void>(`/workflows/${id}`, {
      method: "DELETE",
    });
  },
};
