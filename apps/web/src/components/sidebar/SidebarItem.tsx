"use client";

import { ChevronRight } from "lucide-react";

interface SidebarItemProps {
  icon: any;
  title: string;
  active?: boolean;
  badge?: number;
}

export default function SidebarItem({
  icon: Icon,
  title,
  active,
  badge,
}: SidebarItemProps) {
  return (
    <button
      className={`
        group
        flex
        w-full
        items-center
        justify-between
        rounded-xl
        px-3
        py-2.5
        transition-all
        duration-200

        ${
          active
            ? "bg-blue-600/20 border border-blue-500/30 text-white shadow-[0_0_20px_rgba(59,130,246,.15)]"
            : "border border-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-800/60 hover:text-white"
        }
      `}
    >
      <div className="flex items-center gap-3">

        <Icon
          size={18}
          strokeWidth={2}
        />

        <span className="text-sm font-medium">
          {title}
        </span>

      </div>

      <div className="flex items-center gap-2">

        {badge && (
          <span
            className="
              rounded-full
              bg-slate-700
              px-2
              py-0.5
              text-[11px]
              font-semibold
              text-white
            "
          >
            {badge}
          </span>
        )}

        {active && (
          <ChevronRight
            size={16}
            className="text-blue-400"
          />
        )}

      </div>

    </button>
  );
}