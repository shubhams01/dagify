"use client";

import { useEffect, useState } from "react";

import ReactFlow, {
  Background,
  BackgroundVariant,
  ConnectionMode,
  Edge,
  MarkerType,
  MiniMap,
  Node,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

import WorkflowNode from "./WorkflowNode";
import WorkflowEdge from "./WorkflowEdge";
import CanvasToolbar from "./CanvasToolbar";

import { useExecution } from "@/hooks/useExecution";
import { useWorkflowStore } from "@/store/workflow.store";

const nodeTypes = {
  workflow: WorkflowNode,
};

const edgeTypes = {
  workflow: WorkflowEdge,
};

// const workflowNodes: Node[] = [
//   {
//     id: "extract",
//     type: "workflow",
//     position: { x: 450, y: 80 },
//     data: {
//       name: "Extract",
//       type: "SQL",
//       duration: "1.2s",
//       retry: 0,
//       status: "pending",
//       progress: 0,
//     },
//   },
//   {
//     id: "transform",
//     type: "workflow",
//     position: { x: 180, y: 280 },
//     data: {
//       name: "Transform",
//       type: "Python",
//       duration: "0.8s",
//       retry: 0,
//       status: "pending",
//       progress: 0,
//     },
//   },
//   {
//     id: "validate",
//     type: "workflow",
//     position: { x: 720, y: 280 },
//     data: {
//       name: "Validate",
//       type: "Validation",
//       duration: "0.6s",
//       retry: 0,
//       status: "pending",
//       progress: 0,
//     },
//   },
//   {
//     id: "load",
//     type: "workflow",
//     position: { x: 450, y: 520 },
//     data: {
//       name: "Load",
//       type: "Storage",
//       duration: "0.9s",
//       retry: 0,
//       status: "pending",
//       progress: 0,
//     },
//   },
// ];

// const workflowEdges: Edge[] = [
//   {
//     id: "e1",
//     source: "extract",
//     target: "transform",
//     type: "workflow",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     data: {
//       status: "pending",
//     },
//   },
//   {
//     id: "e2",
//     source: "extract",
//     target: "validate",
//     type: "workflow",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     data: {
//       status: "pending",
//     },
//   },
//   {
//     id: "e3",
//     source: "transform",
//     target: "load",
//     type: "workflow",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     data: {
//       status: "pending",
//     },
//   },
//   {
//     id: "e4",
//     source: "validate",
//     target: "load",
//     type: "workflow",
//     markerEnd: {
//       type: MarkerType.ArrowClosed,
//     },
//     data: {
//       status: "pending",
//     },
//   },
// ];

function Canvas() {
  const execution = useExecution();

  const workflow = useWorkflowStore((state) => state.workflow);

  const updateWorkflow = useWorkflowStore((state) => state.updateWorkflow);

  const saveWorkflow = useWorkflowStore((state) => state.saveWorkflow);

  // const [nodes, setNodes, onNodesChange] = useNodesState(workflow?.nodes);

  // const [edges, setEdges, onEdgesChange] = useEdgesState(workflow?.edges);

  const [nodes, setNodes, onNodesChange] = useNodesState(workflow?.nodes ?? []);

  const [edges, setEdges, onEdgesChange] = useEdgesState(workflow?.edges ?? []);

  const [locked, setLocked] = useState(false);

  const [tool, setTool] = useState<"pointer" | "hand">("pointer");

  useEffect(() => {
    if (!workflow) return;

    setNodes(workflow.nodes);

    setEdges(workflow.edges);
  }, [workflow, setNodes, setEdges]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      saveWorkflow();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [nodes, edges, saveWorkflow]);

  /**
   * Sync execution status into nodes
   */
  useEffect(() => {
    setNodes((current) =>
      current.map((node) => {
        const runtime = execution.nodes[node.id];

        let progress = 0;

        if (runtime?.status === "running") {
          progress = execution.progress;
        } else if (runtime?.status === "success") {
          progress = 100;
        }

        return {
          ...node,

          data: {
            ...node.data,

            status: runtime?.status ?? "pending",

            progress,
          },
        };
      }),
    );
  }, [execution.nodes, execution.progress, setNodes]);

  /**
   * Sync execution status into edges
   */
  useEffect(() => {
    setEdges((current) =>
      current.map((edge) => ({
        ...edge,

        data: {
          status: execution.nodes[edge.source]?.status ?? "pending",
        },
      })),
    );
  }, [execution.nodes, setEdges]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#030712]">
      {/* Ambient Background */}

      <div className="pointer-events-none absolute inset-0">
        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-600/10
          blur-[220px]
        "
        />

        <div
          className="
          absolute
          left-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/5
          blur-[180px]
        "
        />

        <div
          className="
          absolute
          bottom-0
          right-0
          h-[600px]
          w-[600px]
          rounded-full
          bg-indigo-500/5
          blur-[180px]
        "
        />
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        // onNodesChange={onNodesChange}
        // onEdgesChange={onEdgesChange}
        onNodesChange={(changes) => {
          onNodesChange(changes);

          setTimeout(() => {
            useWorkflowStore
              .getState()
              .setWorkflow({
                ...useWorkflowStore.getState().workflow!,
                nodes,
              });
          }, 0);
        }}
      onEdgesChange={(changes) => {
          onEdgesChange(changes);

          setTimeout(() => {
            useWorkflowStore
              .getState()
              .setWorkflow({
                ...useWorkflowStore.getState().workflow!,
                edges,
              });
          }, 0);
        }}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        connectionMode={ConnectionMode.Loose}
        minZoom={0.3}
        maxZoom={2}
        defaultViewport={{
          x: 0,
          y: 0,
          zoom: 0.9,
        }}
        nodesDraggable={!locked}
        nodesConnectable={!locked}
        elementsSelectable={!locked}
        nodesFocusable={!locked}
        edgesFocusable={!locked}
        panOnDrag={tool === "hand"}
        selectionOnDrag={tool === "pointer"}
        panOnScroll
        zoomOnScroll
        zoomOnPinch
        zoomOnDoubleClick={false}
        elevateNodesOnSelect
        elevateEdgesOnSelect
        proOptions={{
          hideAttribution: true,
        }}
        onConnect={(connection) => {
        setEdges((edges) => {
          const updated = addEdge(connection, edges);

          useWorkflowStore
            .getState()
            .setWorkflow({
              ...useWorkflowStore.getState().workflow!,
              edges: updated,
            });

          return updated;
        });
      }}
      >
        <CanvasToolbar
          tool={tool}
          locked={locked}
          setTool={setTool}
          setLocked={setLocked}
        />

        <Background
          variant={BackgroundVariant.Cross}
          gap={28}
          size={1}
          color="#243244"
        />

        <MiniMap
          pannable
          zoomable
          nodeColor={(node) => {
            switch (node.data.status) {
              case "running":
                return "#3B82F6";

              case "success":
                return "#22C55E";

              case "failed":
                return "#EF4444";

              default:
                return "#64748B";
            }
          }}
          maskColor="rgba(3,7,18,.75)"
          className="
            !rounded-xl
            !border
            !border-slate-700
            !bg-[#0F172A]
          "
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
