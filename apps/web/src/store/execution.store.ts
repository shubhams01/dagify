import { create } from "zustand";

import { ExecutionNode, TimelineEvent, LogEntry } from "@/mock/execution";

interface ExecutionState {
  running: boolean;

  currentNode?: string;

  progress: number;

  nodes: Record<string, ExecutionNode>;

  timeline: TimelineEvent[];

  logs: LogEntry[];

  start(): void;

  stop(): void;

  setNodeRunning(id: string): void;

  setNodeCompleted(id: string): void;

  addTimeline(event: TimelineEvent): void;

  addLog(log: LogEntry): void;
}

export const useExecutionStore = create<ExecutionState>((set, get) => ({
  running: false,

  currentNode: undefined,

  progress: 0,

  timeline: [],

  logs: [],

  nodes: {},

  start() {
    set({
      running: true,
      progress: 0,
      timeline: [],
      logs: [],
      nodes: {},
    });
  },

  stop() {
    set({
      running: false,
      currentNode: undefined,
      progress: 100,
    });
  },

  setNodeRunning(id) {
    const total = 4;

    const completed = Object.values(get().nodes).filter(
      (n) => n.status === "success",
    ).length;

    set((state) => ({
      currentNode: id,
      progress: Math.round((completed / total) * 100),
      nodes: {
        ...state.nodes,
        [id]: {
          id,
          status: "running",
          startedAt: Date.now(),
        },
      },
    }));
  },

  setNodeCompleted(id) {
    const total = 4;

    set((state) => {
      const nodes: Record<string, ExecutionNode> = {
        ...state.nodes,
        [id]: {
          ...state.nodes[id],
          status: "success",
          completedAt: Date.now(),
        },
      };

      const completed = Object.values(nodes).filter(
        (n) => n.status === "success",
      ).length;

      return {
        nodes,
        progress: Math.round((completed / total) * 100),
      };
    });
  },

  addTimeline(event) {
    set((state) => ({
      timeline: [...state.timeline, event],
    }));
  },

  addLog(log) {
    set((state) => ({
      logs: [...state.logs, log],
    }));
  },
}));
