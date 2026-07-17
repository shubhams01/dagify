"use client";

import { ChevronRight } from "lucide-react";

import { DrawerView, useDrawerStore } from "@/store/drawer.store";

interface SidebarItemProps {
  icon: any;

  title: string;

  badge?: number;

  drawer?: DrawerView;
}

export default function SidebarItem({
  icon: Icon,
  title,
  badge,
  drawer,
}: SidebarItemProps) {
  const view = useDrawerStore((s) => s.view);

  const toggleDrawer = useDrawerStore(
    (s) => s.toggleDrawer,
  );

  const active =
    drawer !== undefined &&
    drawer !== null &&
    view === drawer;

  return (
    <button
      onClick={() => {
        if (drawer) {
          toggleDrawer(drawer);
        }
      }}
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
            ? "border border-blue-500/30 bg-blue-600/20 text-white shadow-[0_0_24px_rgba(59,130,246,.18)]"
            : "border border-transparent text-slate-400 hover:border-slate-700 hover:bg-slate-800/60 hover:text-white"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <Icon size={18} />

        <span className="text-sm font-medium">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {badge && (
          <span className="rounded-full bg-slate-700 px-2 py-0.5 text-[11px] font-semibold text-white">
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