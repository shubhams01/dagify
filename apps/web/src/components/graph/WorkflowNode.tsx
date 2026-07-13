"use client";

import { memo } from "react";

import { Handle, NodeProps, Position } from "reactflow";

import {
  Database,
  Workflow,
  Clock3,
  RotateCcw,
  CheckCircle2,
  LoaderCircle,
  CircleDashed,
  CircleX,
  MoreHorizontal,
} from "lucide-react";

type Status = "pending" | "running" | "success" | "failed";

const STATUS = {
  pending: {
    icon: CircleDashed,
    border: "border-slate-700",
    text: "text-slate-500",
    progress: "bg-slate-700",
  },

  running: {
    icon: LoaderCircle,
    border: "border-blue-500/40",
    text: "text-blue-400",
    progress: "bg-blue-500",
  },

  success: {
    icon: CheckCircle2,
    border: "border-emerald-500/40",
    text: "text-emerald-400",
    progress: "bg-emerald-500",
  },

  failed: {
    icon: CircleX,
    border: "border-red-500/40",
    text: "text-red-400",
    progress: "bg-red-500",
  },
};

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-slate-800
        bg-slate-900
        p-3
      "
    >
      <div className="flex items-center gap-1 text-xs text-slate-500">
        {icon}
        {label}
      </div>

      <div className="mt-2 text-sm font-semibold capitalize">{value}</div>
    </div>
  );
}

function WorkflowNode({ data, selected }: NodeProps<any>) {
  const state = STATUS[data.status as Status];

  const StatusIcon = state.icon;

  const progress = data.progress ?? 0;

  return (
    <>
      <Handle
        type="target"
        position={Position.Top}
        className="
          !h-3
          !w-3
          !border-2
          !border-[#030712]
          !bg-blue-500
        "
      />

      <div
        className={`
          group
          relative
          w-[290px]
          overflow-hidden
          rounded-2xl
          border
          bg-[#0F172A]/95
          backdrop-blur-xl
          transition-all
          duration-500

          ${state.border}

          ${
            selected
              ? "ring-2 ring-blue-500 scale-[1.02]"
              : "hover:scale-[1.02]"
          }

          ${
            data.status === "running"
              ? "shadow-[0_0_45px_rgba(59,130,246,.45)]"
              : ""
          }

          ${
            data.status === "success"
              ? "shadow-[0_0_30px_rgba(34,197,94,.25)]"
              : ""
          }

          ${
            data.status === "failed"
              ? "shadow-[0_0_30px_rgba(239,68,68,.25)]"
              : ""
          }
        `}
      >
        {/* Top Accent */}

        <div
          className={`
            absolute
            left-0
            right-0
            top-0
            h-1

            ${data.status === "running" ? "animate-pulse" : ""}

            bg-gradient-to-r
            from-blue-500
            via-cyan-400
            to-blue-500
          `}
        />

        <div className="p-5">
          {/* Header */}

          <div className="flex items-start justify-between">
            <div className="flex gap-3">
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-800
                "
              >
                <Database size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-white">{data.name}</h3>

                <div
                  className="
                    mt-2
                    inline-flex
                    items-center
                    gap-1
                    rounded-full
                    bg-slate-800
                    px-2.5
                    py-1
                    text-[11px]
                    text-slate-400
                  "
                >
                  <Workflow size={12} />

                  {data.type}
                </div>

                <div
                  className={`
                    mt-2
                    inline-flex
                    rounded-full
                    px-2.5
                    py-1
                    text-[11px]
                    font-semibold

                    ${
                      data.status === "running"
                        ? "bg-blue-500/20 text-blue-300"
                        : ""
                    }

                    ${
                      data.status === "success"
                        ? "bg-emerald-500/20 text-emerald-300"
                        : ""
                    }

                    ${
                      data.status === "failed"
                        ? "bg-red-500/20 text-red-300"
                        : ""
                    }

                    ${
                      data.status === "pending"
                        ? "bg-slate-800 text-slate-400"
                        : ""
                    }
                  `}
                >
                  {data.status.toUpperCase()}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <StatusIcon
                size={20}
                className={`
                  ${state.text}

                  ${data.status === "running" ? "animate-spin" : ""}
                `}
              />

              <button
                className="
                  rounded-lg
                  p-2
                  opacity-0
                  transition
                  group-hover:opacity-100
                  hover:bg-slate-800
                "
              >
                <MoreHorizontal size={16} />
              </button>
            </div>
          </div>

          {/* Metrics */}

          <div className="mt-5 grid grid-cols-3 gap-3">
            <Metric
              icon={<StatusIcon size={14} className={state.text} />}
              label="Status"
              value={data.status}
            />

            <Metric
              icon={<Clock3 size={14} />}
              label="Runtime"
              value={data.status === "running" ? "Running..." : data.duration}
            />

            <Metric
              icon={<RotateCcw size={14} />}
              label="Retry"
              value={String(data.retry)}
            />
          </div>

          {/* Progress */}

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-slate-400">Progress</span>

              <span className="font-medium">{progress}%</span>
            </div>

            <div
              className="
                h-2.5
                overflow-hidden
                rounded-full
                bg-slate-800
              "
            >
              <div
                style={{
                  width: `${progress}%`,
                }}
                className={`
                  h-full
                  rounded-full
                  transition-all
                  duration-700
                  ease-in-out

                  ${state.progress}
                `}
              />
            </div>
          </div>

          {/* Footer */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              text-xs
              text-slate-500
            "
          >
            SQL → Transform → Storage
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
          !border-[#030712]
          !bg-cyan-500
        "
      />
    </>
  );
}

export default memo(WorkflowNode);
