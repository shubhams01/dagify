"use client";

import { useEffect, useState } from "react";

import {
  Workflow,
  WorkflowService,
} from "@/services/workflow.service";

export function useWorkflow(id: string) {
  const [workflow, setWorkflow] =
    useState<Workflow | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<Error | null>(null);

  useEffect(() => {
    async function loadWorkflow() {
      try {
        const result =
          await WorkflowService.findById(id);

        setWorkflow(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadWorkflow();
    }
  }, [id]);

  return {
    workflow,
    loading,
    error,
  };
}