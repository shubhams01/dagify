import type { WorkflowNode } from "./node";
import type { WorkflowEdge } from "./edge";

export type WorkflowStatus = "draft" | "published" | "archived";

export interface WorkflowMetadata {
  id: string;
  name: string;
  description?: string;
  version: number;
  status: WorkflowStatus;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface WorkflowViewport {
  x: number;
  y: number;
  zoom: number;
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  description?: string;

  nodes: WorkflowNode[];
  edges: WorkflowEdge[];

  viewport: WorkflowViewport;

  metadata: WorkflowMetadata;
}
