"use client";

import { useState } from "react";

import {
  Activity,
  Clock3,
  FileText,
  Terminal,
  Variable,
} from "lucide-react";

const tabs = [
  {
    id: "timeline",
    label: "Timeline",
    icon: Clock3,
  },
  {
    id: "logs",
    label: "Logs",
    icon: Terminal,
  },
  {
    id: "events",
    label: "Events",
    icon: Activity,
  },
  {
    id: "metrics",
    label: "Metrics",
    icon: Activity,
  },
  {
    id: "variables",
    label: "Variables",
    icon: Variable,
  },
  {
    id: "output",
    label: "Output",
    icon: FileText,
  },
];

interface Props {
  active: string;
  onChange(tab: string): void;
}

export default function BottomTabs({
  active,
  onChange,
}: Props) {
  return (
    <div
      className="
      flex
      items-center
      gap-1
      border-b
      border-slate-800
      bg-[#0B1220]
      px-4
      py-2
    "
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`
              flex
              items-center
              gap-2
              rounded-lg
              px-4
              py-2
              text-sm
              transition-all

              ${
                active === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }
            `}
          >
            <Icon size={15} />

            {tab.label}
          </button>
        );
      })}
    </div>
  );
}