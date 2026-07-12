"use client";

import {
  Maximize,
  Minus,
  Plus,
  ScanSearch,
} from "lucide-react";

export default function Toolbar() {
  return (

    <div
      className="
      absolute
      left-1/2
      top-6
      z-20
      flex
      -translate-x-1/2
      items-center
      gap-3
      rounded-2xl
      border
      border-slate-700
      bg-slate-900/90
      px-4
      py-3
      backdrop-blur-xl
      "
    >

      <button>

        <Minus size={18} />

      </button>

      <button>

        <Plus size={18} />

      </button>

      <button>

        <Maximize size={18} />

      </button>

      <button>

        <ScanSearch size={18} />

      </button>

    </div>

  );
}