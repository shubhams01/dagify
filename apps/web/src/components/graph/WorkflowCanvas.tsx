"use client";

import { useEffect, useMemo } from "react";

import ReactFlow, {
  Background,
  BackgroundVariant,
  MiniMap,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  ConnectionMode,
  MarkerType,
  Node,
  Edge,
} from "reactflow";

import "reactflow/dist/style.css";

import { useCanvas } from "@/hooks/useCanvas";

import WorkflowNode from "./WorkflowNode";
import WorkflowEdge from "./WorkflowEdge";
import Toolbar from "./Toolbar";

const nodeTypes = {
  workflow: WorkflowNode,
};

const edgeTypes = {
  workflow: WorkflowEdge,
};

const initialNodes: Node[] = [
  {
    id: "extract",
    type: "workflow",
    position: { x: 350, y: 80 },
    data: {
      name: "Extract",
      type: "SQL",
      status: "success",
      duration: "1.2s",
      retry: 0,
    },
  },

  {
    id: "transform",
    type: "workflow",
    position: { x: 120, y: 280 },
    data: {
      name: "Transform",
      type: "Function",
      status: "running",
      duration: "0.8s",
      retry: 0,
    },
  },

  {
    id: "validate",
    type: "workflow",
    position: { x: 580, y: 280 },
    data: {
      name: "Validate",
      type: "Validation",
      status: "pending",
      duration: "--",
      retry: 0,
    },
  },

  {
    id: "load",
    type: "workflow",
    position: { x: 350, y: 520 },
    data: {
      name: "Load",
      type: "Storage",
      status: "pending",
      duration: "--",
      retry: 0,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1",

    source: "extract",

    target: "transform",

    type: "workflow",

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "e2",

    source: "extract",

    target: "validate",

    type: "workflow",

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "e3",

    source: "transform",

    target: "load",

    type: "workflow",

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },

  {
    id: "e4",

    source: "validate",

    target: "load",

    type: "workflow",

    markerEnd: {
      type: MarkerType.ArrowClosed,
    },
  },
];

function Canvas() {
  const {
    setNodes,
    setEdges,
    selectNode,
    setZoom,
  } = useCanvas();

  const [nodes, , onNodesChange] =
    useNodesState(initialNodes);

  const [edges, , onEdgesChange] =
    useEdgesState(initialEdges);

  useEffect(() => {
    setNodes(nodes);
  }, [nodes, setNodes]);

  useEffect(() => {
    setEdges(edges);
  }, [edges, setEdges]);

  const defaultViewport = useMemo(
    () => ({
      x: 0,
      y: 0,
      zoom: 0.9,
    }),
    [],
  );

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#050816]">

      {/* Ambient Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[220px]" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-indigo-500/5 blur-[180px]" />

      </div>

      <Toolbar />

      <ReactFlow
        defaultViewport={defaultViewport}
        fitView
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={(_, node) => selectNode(node.id)}
        onMove={(_, viewport) => setZoom(viewport.zoom)}
        connectionMode={ConnectionMode.Loose}
        panOnDrag
        panOnScroll
        zoomOnScroll
        zoomOnPinch
        zoomOnDoubleClick={false}
        selectionOnDrag
        elevateEdgesOnSelect
        elevateNodesOnSelect
        minZoom={0.3}
        maxZoom={2}
        proOptions={{
          hideAttribution: true,
        }}
      >
        <Background
          variant={BackgroundVariant.Cross}
          gap={30}
          size={1}
          color="#243244"
        />

        <MiniMap
          zoomable
          pannable
          nodeColor="#2563EB"
          maskColor="rgba(5,8,22,.7)"
          className="!rounded-xl !border !border-slate-700 !bg-slate-900"
        />
      </ReactFlow>

    </div>
  );
}

export default function WorkflowCanvas() {
  return (
    <ReactFlowProvider>
      <Canvas />
    </ReactFlowProvider>
  );
}