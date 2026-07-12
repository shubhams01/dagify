import { create } from "zustand";
import type { Node, Edge } from "reactflow";

interface CanvasState {
  nodes: Node[];
  edges: Edge[];

  selectedNodeId: string | null;

  zoom: number;

  setNodes(nodes: Node[]): void;

  setEdges(edges: Edge[]): void;

  updateNode(id: string, data: Partial<Node>): void;

  selectNode(id: string | null): void;

  setZoom(zoom: number): void;
}

export const useCanvasStore = create<CanvasState>((set) => ({
  nodes: [],

  edges: [],

  selectedNodeId: null,

  zoom: 1,

  setNodes: (nodes) => set({ nodes }),

  setEdges: (edges) => set({ edges }),

  selectNode: (selectedNodeId) =>
    set({
      selectedNodeId,
    }),

  setZoom: (zoom) =>
    set({
      zoom,
    }),

  updateNode: (id, data) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === id
          ? {
              ...node,
              ...data,
            }
          : node,
      ),
    })),
}));