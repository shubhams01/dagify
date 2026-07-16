import type { Edge } from "reactflow";

export interface WorkflowEdgeData {
  status: "pending" | "running" | "success" | "failed";
}

export type WorkflowEdge = Edge<WorkflowEdgeData>;
