"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";

interface SectionProps {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function Section({
  title,
  defaultOpen = true,
  children,
}: SectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-6">

      <button
        onClick={() => setOpen(!open)}
        className="
          mb-3
          flex
          w-full
          items-center
          gap-2
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-slate-500
          hover:text-white
        "
      >
        {open ? (
          <ChevronDown size={15} />
        ) : (
          <ChevronRight size={15} />
        )}

        {title}
      </button>

      {open && children}

    </div>
  );
}