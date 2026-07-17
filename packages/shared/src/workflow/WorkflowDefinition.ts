import { WorkflowEdge } from "./WorkflowEdge";
import { WorkflowNode } from "./WorkflowNode";

export interface WorkflowDefinition {
  id: string;

  name: string;

  version: number;

  nodes: WorkflowNode[];

  edges: WorkflowEdge[];
}