"use client";

import { CheckCircle2, ChevronRight } from "lucide-react";

export default function SystemHealth() {
  return (
    <div className="border-t border-slate-800 p-4">

      <button
        className="
          w-full
          rounded-2xl
          border
          border-emerald-500/20
          bg-emerald-500/5
          p-4
          transition-all
          duration-200
          hover:border-emerald-500/40
          hover:bg-emerald-500/10
        "
      >
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-emerald-500/15
              "
            >
              <CheckCircle2
                size={22}
                className="text-emerald-400"
              />
            </div>

            <div className="text-left">

              <p className="text-sm font-semibold text-white">
                System Health
              </p>

              <p className="text-xs text-emerald-400">
                All systems operational
              </p>

            </div>

          </div>

          <ChevronRight
            size={18}
            className="text-slate-500"
          />

        </div>

      </button>

    </div>
  );
}