"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";

export default function Breadcrumb() {
  return (
    <div className="flex flex-col">

      <div className="flex items-center gap-2 text-sm text-slate-400">

        <span>Workflows</span>

        <ChevronRight size={14} />

        <span className="font-medium text-white">
          daily-etl
        </span>

      </div>

      <div className="mt-2 flex items-center gap-2">

        <CheckCircle2
          size={14}
          className="text-emerald-400"
        />

        <span className="text-xs text-emerald-400">
          Saved
        </span>

      </div>

    </div>
  );
}