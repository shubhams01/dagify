"use client";

import {
  CheckCircle2,
  Circle,
  Clock3,
  PlayCircle,
  Star,
  Workflow,
  XCircle,
} from "lucide-react";

import { WorkflowSummary } from "@/mock/workflows";

interface Props {
  workflow: WorkflowSummary;
  selected?: boolean;
  onClick?: () => void;
}

const statusConfig = {
  success: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    label: "Success",
  },

  running: {
    icon: PlayCircle,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    label: "Running",
  },

  failed: {
    icon: XCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    label: "Failed",
  },

  idle: {
    icon: Circle,
    color: "text-slate-400",
    bg: "bg-slate-700/30",
    border: "border-slate-700",
    label: "Idle",
  },
};

export default function WorkflowCard({
  workflow,
  selected = false,
  onClick,
}: Props) {
  const status = statusConfig[workflow.status];
  const StatusIcon = status.icon;

  return (
    <button
      onClick={onClick}
      className={`
        group
        w-full
        rounded-2xl
        border
        p-4
        text-left
        transition-all
        duration-300

        ${
          selected
            ? "border-blue-500 bg-blue-500/10 shadow-[0_0_35px_rgba(59,130,246,.25)]"
            : "border-slate-800 bg-[#0B1220] hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900"
        }
      `}
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-slate-800
              transition-colors
              group-hover:bg-slate-700
            "
          >
            <Workflow size={20} />
          </div>

          <div>

            <h3 className="font-semibold text-white">

              {workflow.name}

            </h3>

            <p className="mt-1 text-xs text-slate-500">

              {workflow.workspace}

            </p>

          </div>

        </div>

        {workflow.favorite && (
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        )}

      </div>

      {/* Description */}

      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-400">

        {workflow.description}

      </p>

      {/* Stats */}

      <div className="mt-5 flex items-center justify-between">

        <div
          className={`
            flex
            items-center
            gap-2
            rounded-full
            border
            px-3
            py-1.5
            text-xs

            ${status.bg}
            ${status.border}
            ${status.color}
          `}
        >

          <StatusIcon size={14} />

          {status.label}

        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500">

          <Workflow size={14} />

          {workflow.nodes} Nodes

        </div>

      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">

        <Clock3 size={14} />

        Last Run

        <span className="text-slate-300">

          {workflow.lastRun}

        </span>

      </div>

    </button>
  );
}