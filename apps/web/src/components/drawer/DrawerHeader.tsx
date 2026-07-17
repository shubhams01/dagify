"use client";

import { X } from "lucide-react";

import { useDrawerStore } from "@/store/drawer.store";

interface Props {
  title: string;
}

export default function DrawerHeader({
  title,
}: Props) {
  const closeDrawer = useDrawerStore(
    (state) => state.closeDrawer,
  );

  return (
    <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
      <h2 className="text-lg font-semibold text-white">
        {title}
      </h2>

      <button
        onClick={closeDrawer}
        className="rounded-lg p-2 transition hover:bg-slate-800"
      >
        <X className="h-5 w-5 text-slate-400" />
      </button>
    </div>
  );
}