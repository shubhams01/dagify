"use client";

import {
  Bolt,
  Plus,
} from "lucide-react";

export default function SidebarHeader() {
  return (
    <>

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-slate-800
          px-5
          py-5
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              bg-gradient-to-br
              from-blue-500
              to-violet-500
              shadow-lg
              shadow-blue-500/20
            "
          >
            <Bolt
              size={22}
              className="text-white"
            />
          </div>

          <div>

            <h1 className="text-2xl font-bold">

              DAGify

            </h1>

            <span
              className="
                rounded-md
                bg-violet-500/15
                px-2
                py-1
                text-[10px]
                font-semibold
                uppercase
                tracking-wide
                text-violet-300
              "
            >
              Enterprise
            </span>

          </div>

        </div>

      </div>

      <div
        className="
          border-b
          border-slate-800
          p-4
        "
      >
        <button
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            px-4
            py-3
            transition-all
            hover:border-blue-500
            hover:bg-slate-800
          "
        >
          <div className="flex items-center gap-3">

            <Plus size={18} />

            <span className="font-medium">

              New Workflow

            </span>

          </div>

          <Plus size={16} />

        </button>

      </div>

    </>
  );
}