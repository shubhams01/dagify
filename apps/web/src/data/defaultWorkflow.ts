import { WorkflowDefinition } from "@/models/workflow";

export const defaultWorkflow: WorkflowDefinition = {
  metadata: {
    id: crypto.randomUUID(),
    name: "Daily ETL",
    description: "Default DAGify workflow",
    version: 1,
    status: "draft",
    tags: [],

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },

  viewport: {
    x: 0,
    y: 0,
    zoom: 1,
  },

  nodes: [
    {
      id: "extract",

      type: "workflow",

      position: {
        x: 450,
        y: 80,
      },

      data: {
        name: "1Extract",
        type: "sql",
        duration: "1.2s",
        retry: 0,
        progress: 0,
        status: "pending",
        config: {},
        inputs: [],
        outputs: [],
      },
    },

    {
      id: "transform",

      type: "workflow",

      position: {
        x: 180,
        y: 280,
      },

      data: {
        name: "2Transform",
        type: "python",
        duration: "0.8s",
        retry: 0,
        progress: 0,
        status: "pending",
        config: {},
        inputs: [],
        outputs: [],
      },
    },

    {
      id: "validate",

      type: "workflow",

      position: {
        x: 720,
        y: 280,
      },

      data: {
        name: "3Validate",
        type: "validation",
        duration: "0.6s",
        retry: 0,
        progress: 0,
        status: "pending",
        config: {},
        inputs: [],
        outputs: [],
      },
    },

    {
      id: "load",

      type: "workflow",

      position: {
        x: 450,
        y: 520,
      },

      data: {
        name: "4Load",
        type: "storage",
        duration: "0.9s",
        retry: 0,
        progress: 0,
        status: "pending",
        config: {},
        inputs: [],
        outputs: [],
      },
    },
  ],

  edges: [
    {
      id: "e1",
      source: "extract",
      target: "transform",
      type: "workflow",
      data: {
        status: "pending",
      },
    },

    {
      id: "e2",
      source: "extract",
      target: "validate",
      type: "workflow",
      data: {
        status: "pending",
      },
    },

    {
      id: "e3",
      source: "transform",
      target: "load",
      type: "workflow",
      data: {
        status: "pending",
      },
    },

    {
      id: "e4",
      source: "validate",
      target: "load",
      type: "workflow",
      data: {
        status: "pending",
      },
    },
  ],
};
