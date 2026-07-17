"use client";

import { useEffect } from "react";

import StudioHeader from "@/components/header/StudioHeader";
import Sidebar from "@/components/sidebar/Sidebar";
import WorkflowCanvas from "../graph/WorkflowCanvas";
import WorkspaceDrawer from "@/components/drawer/WorkspaceDrawer";

import { useWorkflowStore } from "@/store/workflow.store";
import { WorkflowService } from "@/services/workflow.service";
import Workspace from "../workspace/Workspace";

export default function Studio() {
  const loadWorkflow = useWorkflowStore(
    (state) => state.loadWorkflow,
  );

  const createWorkflow = useWorkflowStore(
    (state) => state.createWorkflow,
  );

  useEffect(() => {
    async function initialize() {
      try {
        const workflows =
          await WorkflowService.findAll();

        if (workflows.length === 0) {
          await createWorkflow("Untitled Workflow");
        } else {
          await loadWorkflow(workflows[0].id);
        }
      } catch (error) {
        console.error(error);
      }
    }

    initialize();
  }, [loadWorkflow, createWorkflow]);

  return (
    <div className="flex h-screen flex-col">
      <StudioHeader />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <Workspace />
      </div>
    </div>
  );
}