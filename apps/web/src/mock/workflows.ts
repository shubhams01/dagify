export type WorkflowStatus =
  | "running"
  | "success"
  | "failed"
  | "idle";

export interface WorkflowSummary {
  id: string;
  name: string;
  workspace: string;
  description: string;
  status: WorkflowStatus;
  lastRun: string;
  favorite: boolean;
  nodes: number;
}

export const workflows: WorkflowSummary[] = [
  {
    id: "daily-etl",
    name: "Daily ETL",
    workspace: "Data Engineering",
    description: "Extract customer data from PostgreSQL.",
    status: "success",
    lastRun: "2 min ago",
    favorite: true,
    nodes: 12,
  },
  {
    id: "customer-sync",
    name: "Customer Sync",
    workspace: "CRM",
    description: "Synchronize customers with Salesforce.",
    status: "running",
    lastRun: "Running",
    favorite: true,
    nodes: 8,
  },
  {
    id: "invoice-processing",
    name: "Invoice Processing",
    workspace: "Finance",
    description: "Generate invoices and upload PDFs.",
    status: "failed",
    lastRun: "15 min ago",
    favorite: false,
    nodes: 18,
  },
  {
    id: "email-notification",
    name: "Email Notification",
    workspace: "Marketing",
    description: "Send campaign emails.",
    status: "idle",
    lastRun: "Yesterday",
    favorite: false,
    nodes: 5,
  },
  {
    id: "kafka-pipeline",
    name: "Kafka Pipeline",
    workspace: "Streaming",
    description: "Consume Kafka events.",
    status: "running",
    lastRun: "Running",
    favorite: false,
    nodes: 26,
  },
];