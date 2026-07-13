"use client";

import { memo } from "react";

import {
  BaseEdge,
  EdgeLabelRenderer,
  EdgeProps,
  getBezierPath,
} from "reactflow";

interface WorkflowEdgeData {
  status?: "pending" | "running" | "success" | "failed";
}

function WorkflowEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  markerEnd,
  data,
}: EdgeProps<WorkflowEdgeData>) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const status = data?.status ?? "pending";

  let stroke = "#475569";
  let glow = "none";

  switch (status) {
    case "running":
      stroke = "#3B82F6";
      glow = "drop-shadow(0 0 10px rgba(59,130,246,.9))";
      break;

    case "success":
      stroke = "#22C55E";
      glow = "drop-shadow(0 0 8px rgba(34,197,94,.8))";
      break;

    case "failed":
      stroke = "#EF4444";
      glow = "drop-shadow(0 0 8px rgba(239,68,68,.8))";
      break;
  }

  return (
    <>
      {/* Background Edge */}

      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          stroke: "#1E293B",
          strokeWidth: 6,
        }}
      />

      {/* Main Edge */}

      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{
          stroke,
          strokeWidth: 3,
          filter: glow,
          transition: "all .4s ease",
        }}
      />

      {/* Animated Flow */}

      {status === "running" && (
        <path
          d={edgePath}
          fill="none"
          stroke="#7DD3FC"
          strokeWidth={6}
          strokeDasharray="8 12"
          style={{
            animation: "dash-flow 1s linear infinite",
          }}
        />
      )}

      {/* Status Dot */}

      <EdgeLabelRenderer>
        <div
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: "none",
          }}
        >
          <div
            className="h-3 w-3 rounded-full border border-slate-900"
            style={{
              background: stroke,
              boxShadow:
                status === "running"
                  ? "0 0 12px #3B82F6"
                  : status === "success"
                  ? "0 0 8px #22C55E"
                  : status === "failed"
                  ? "0 0 8px #EF4444"
                  : "none",
            }}
          />
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export default memo(WorkflowEdge);