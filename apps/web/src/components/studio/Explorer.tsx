"use client";

import { Search } from "lucide-react";

interface SearchBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBox({
  value,
  onChange,
}: SearchBoxProps) {
  return (
    <div className="relative">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search workflows..."
        className="
          h-11
          w-full
          rounded-xl
          border
          border-slate-800
          bg-slate-900
          pl-11
          pr-4
          text-sm
          text-white
          outline-none
          transition-all
          placeholder:text-slate-500
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500/20
        "
      />

    </div>
  );
}