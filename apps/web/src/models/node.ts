import type { Node } from "reactflow";

export type TaskType =
  | "sql"
  | "http"
  | "python"
  | "typescript"
  | "validation"
  | "condition"
  | "delay"
  | "email"
  | "storage";

export type NodeExecutionStatus = "pending" | "running" | "success" | "failed";

export interface WorkflowNodeData {
  name: string;

  type: TaskType;

  description?: string;

  status: NodeExecutionStatus;

  progress: number;

  retry: number;

  duration: string;

  config: Record<string, unknown>;

  inputs: string[];

  outputs: string[];
}

export type WorkflowNode = Node<WorkflowNodeData>;
