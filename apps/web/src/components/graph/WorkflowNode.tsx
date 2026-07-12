"use client";

import { memo } from "react";

import {
  Handle,
  Position,
  NodeProps,
} from "reactflow";

import {
  Database,
  CheckCircle2,
  CircleDashed,
  LoaderCircle,
  CircleX,
  Clock3,
  RotateCcw,
  Activity,
} from "lucide-react";

import { useCanvas } from "@/hooks/useCanvas";

type Status =
  | "pending"
  | "running"
  | "success"
  | "failed";

const STATUS = {
  pending: {
    icon: CircleDashed,
    border: "border-slate-700",
    text: "text-slate-400",
    ring: "bg-slate-500",
  },

  running: {
    icon: LoaderCircle,
    border: "border-blue-500",
    text: "text-blue-400",
    ring: "bg-blue-500 animate-pulse",
  },

  success: {
    icon: CheckCircle2,
    border: "border-green-500",
    text: "text-green-400",
    ring: "bg-green-500",
  },

  failed: {
    icon: CircleX,
    border: "border-red-500",
    text: "text-red-400",
    ring: "bg-red-500",
  },
};

function WorkflowNode({
  id,
  data,
}: NodeProps<any>) {

  const { selectedNodeId } = useCanvas();

  const selected = selectedNodeId === id;

  const state =
    STATUS[data.status as Status];

  const StatusIcon = state.icon;

  return (
    <>

      <Handle
        type="target"
        position={Position.Top}
        className="
        !h-3
        !w-3
        !border-2
        !border-[#050816]
        !bg-blue-500
        "
      />

      <div
        className={`
        group
        relative
        w-[270px]
        overflow-hidden
        rounded-3xl
        border
        bg-[#0B1220]/90
        backdrop-blur-xl
        transition-all
        duration-300

        ${state.border}

        ${
          selected
            ? "ring-2 ring-blue-500 shadow-[0_0_45px_rgba(59,130,246,.35)] scale-[1.02]"
            : "hover:scale-[1.02] hover:border-blue-400"
        }
        `}
      >

        {/* Top Gradient */}

        <div
          className="
          absolute
          left-0
          right-0
          top-0
          h-1
          bg-gradient-to-r
          from-blue-500
          via-cyan-500
          to-blue-500
          "
        />

        <div className="p-5">

          {/* Header */}

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div
                className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-slate-800
                "
              >
                <Database size={22} />
              </div>

              <div>

                <h3 className="font-semibold">

                  {data.name}

                </h3>

                <p className="text-xs text-slate-400">

                  {data.type}

                </p>

              </div>

            </div>

            <StatusIcon
              className={`${state.text}`}
              size={22}
            />

          </div>

          {/* Divider */}

          <div className="my-5 border-t border-slate-800" />

          {/* Stats */}

          <div className="grid grid-cols-2 gap-3">

            <div
              className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              p-3
              "
            >

              <div className="flex items-center gap-2 text-xs text-slate-400">

                <Clock3 size={14} />

                Runtime

              </div>

              <div className="mt-2 text-sm font-semibold">

                {data.duration}

              </div>

            </div>

            <div
              className="
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              p-3
              "
            >

              <div className="flex items-center gap-2 text-xs text-slate-400">

                <RotateCcw size={14} />

                Retry

              </div>

              <div className="mt-2 text-sm font-semibold">

                {data.retry}

              </div>

            </div>

          </div>

          {/* Footer */}

          <div className="mt-5 flex items-center justify-between">

            <div className="flex items-center gap-2">

              <span
                className={`
                h-2.5
                w-2.5
                rounded-full
                ${state.ring}
                `}
              />

              <span
                className={`text-sm capitalize ${state.text}`}
              >

                {data.status}

              </span>

            </div>

            <div className="flex items-center gap-2 text-slate-500">

              <Activity size={16} />

              Task

            </div>

          </div>

        </div>

      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        className="
        !h-3
        !w-3
        !border-2
        !border-[#050816]
        !bg-cyan-500
        "
      />

    </>
  );
}

export default memo(WorkflowNode);