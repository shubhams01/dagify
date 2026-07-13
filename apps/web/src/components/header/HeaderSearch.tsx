"use client";

import { Search } from "lucide-react";

export default function HeaderSearch() {
  return (
    <div className="relative w-[360px]">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        placeholder="Search..."
        className="
          h-11
          w-full
          rounded-xl
          border
          border-slate-700
          bg-[#111827]
          pl-11
          pr-20
          text-sm
          outline-none
          transition
          placeholder:text-slate-500
          focus:border-blue-500
        "
      />

      <div
        className="
          absolute
          right-3
          top-1/2
          -translate-y-1/2
          rounded-md
          bg-slate-800
          px-2
          py-1
          text-[10px]
          text-slate-400
        "
      >
        Ctrl K
      </div>

    </div>
  );
}