export type ExecutionStatus = "pending" | "running" | "success" | "failed";

export interface ExecutionNode {
  id: string;

  status: ExecutionStatus;

  startedAt?: number;

  completedAt?: number;
}

export interface TimelineEvent {
  id: string;

  timestamp: string;

  nodeId: string;

  message: string;
}

export interface LogEntry {
  id: string;

  timestamp: string;

  nodeId: string;

  level: "info" | "warn" | "error";

  message: string;
}

export const executionOrder = ["extract", "transform", "validate", "load"];
