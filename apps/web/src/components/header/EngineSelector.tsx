"use client";

import { ChevronDown, Cpu } from "lucide-react";

export default function EngineSelector() {
  return (
    <button
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-700
        bg-[#111827]
        px-4
        py-2.5
        transition
        hover:border-blue-500
      "
    >
      <Cpu
        size={18}
        className="text-blue-400"
      />

      <span className="text-sm">
        Local Engine
      </span>

      <ChevronDown size={16} />

    </button>
  );
}