import { create } from "zustand";
import {
  Connection,
  Edge,
  Node,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  EdgeChange,
  NodeChange,
} from "reactflow";

import type { WorkflowDefinition } from "@/models/workflow";
import { WorkflowService } from "@/services/workflow.service";
// import { defaultWorkflow } from "@/data/defaultWorkflow";

interface WorkflowStore {
  workflow: WorkflowDefinition | null;

  dirty: boolean;

  saving: boolean;

  selectedNodeId?: string;

  lastSaved?: string;

  createWorkflow(name?: string): Promise<void>;

  loadWorkflow(id: string): Promise<void>;

  saveWorkflow(): Promise<void>;

  setWorkflow(workflow: WorkflowDefinition): void;

  setSelectedNode(id?: string): void;

  //   setNodes(changes: NodeChange[]): void;

  //   setEdges(changes: EdgeChange[]): void;

  //   replaceNodes(nodes: Node[]): void;

  //   replaceEdges(edges: Edge[]): void;

  //   connect(connection: Connection): void;

  addNode(node: Node): void;

  removeNode(id: string): void;

  updateNode(id: string, data: Record<string, unknown>): void;
}

export const useWorkflowStore = create<WorkflowStore>((set, get) => ({
  // workflow: structuredClone(defaultWorkflow),

  workflow: null,

  dirty: false,

  saving: false,

  selectedNodeId: undefined,

  lastSaved: undefined,

  async createWorkflow(name = "Untitled Workflow") {
    const workflow = await WorkflowService.create(name);

    set({
      workflow,

      dirty: true,
    });
  },

  async loadWorkflow(id) {
    const workflow = await WorkflowService.findById(id);

    if (!workflow) {
      throw new Error("Workflow not found.");
    }

    set({
      workflow,

      dirty: false,
    });
  },

  async saveWorkflow() {
    const workflow = get().workflow;

    if (!workflow) {
      return;
    }

    set({
      saving: true,
    });

    // await WorkflowService.save(workflow);
    await WorkflowService.update(
      workflow.id,
      workflow,
    );

    set({
      saving: false,

      dirty: false,

      lastSaved: new Date().toLocaleTimeString(),
    });
  },

  setWorkflow(workflow) {
    set({
      workflow,

      dirty: true,
    });
  },

  setSelectedNode(id) {
    set({
      selectedNodeId: id,
    });
  },

  //   setNodes(changes) {
  //     const workflow = get().workflow;

  //     if (!workflow) return;

  //     workflow.nodes = applyNodeChanges(changes, workflow.nodes);

  //     set({
  //       workflow,

  //       dirty: true,
  //     });
  //   },

  //   setEdges(changes) {
  //     const workflow = get().workflow;

  //     if (!workflow) return;

  //     workflow.edges = applyEdgeChanges(changes, workflow.edges);

  //     set({
  //       workflow,

  //       dirty: true,
  //     });
  //   },

  //   replaceNodes(nodes) {
  //     const workflow = get().workflow;

  //     if (!workflow) return;

  //     workflow.nodes = nodes;

  //     set({
  //       workflow,

  //       dirty: true,
  //     });
  //   },

  //   replaceEdges(edges) {
  //     const workflow = get().workflow;

  //     if (!workflow) return;

  //     workflow.edges = edges;

  //     set({
  //       workflow,

  //       dirty: true,
  //     });
  //   },

  //   connect(connection) {
  //     const workflow = get().workflow;

  //     if (!workflow) return;

  //     workflow.edges = addEdge(connection, workflow.edges);

  //     set({
  //       workflow,

  //       dirty: true,
  //     });
  //   },

  addNode(node) {
    const workflow = get().workflow;

    if (!workflow) return;

    workflow.nodes.push(node);

    set({
      workflow,

      dirty: true,
    });
  },

  removeNode(id) {
    const workflow = get().workflow;

    if (!workflow) return;

    workflow.nodes = workflow.nodes.filter((node) => node.id !== id);

    workflow.edges = workflow.edges.filter(
      (edge) => edge.source !== id && edge.target !== id,
    );

    set({
      workflow,

      dirty: true,
    });
  },

  updateNode(id, data) {
    const workflow = get().workflow;

    if (!workflow) return;

    workflow.nodes = workflow.nodes.map((node) => {
      if (node.id !== id) {
        return node;
      }

      return {
        ...node,

        data: {
          ...node.data,

          ...data,
        },
      };
    });

    set({
      workflow,

      dirty: true,
    });
  },

  // updateWorkflow(update) {
  //   const workflow = get().workflow;

  //   if (!workflow) return;

  //   set({
  //     workflow: {
  //       ...workflow,

  //       ...update,

  //       metadata: {
  //         ...workflow.metadata,

  //         updatedAt: new Date().toISOString(),
  //       },
  //     },

  //     dirty: true,
  //   });
  // },
}));
