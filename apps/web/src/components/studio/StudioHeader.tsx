"use client";

import {
  Bell,
  Play,
  Search,
  Wifi,
  ChevronDown,
} from "lucide-react";

export default function StudioHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-[#050816]/95 px-6 backdrop-blur-xl">

      {/* Left */}

      <div className="flex items-center gap-8">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold shadow-lg shadow-blue-600/30">
            D
          </div>

          <div>
            <h1 className="text-lg font-semibold">
              DAGify
            </h1>

            <p className="text-xs text-slate-400">
              Workflow Studio
            </p>
          </div>

        </div>

        <div className="relative">

          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />

          <input
            placeholder="Search workflow..."
            className="
            w-80
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            py-2.5
            pl-11
            pr-4
            text-sm
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/30
            "
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5">

          <Wifi
            size={16}
            className="text-green-400"
          />

          <span className="text-sm text-green-400">
            Local
          </span>

        </div>

        <button className="rounded-xl p-2 transition hover:bg-slate-800">
          {/* <Github size={20} /> */}
          Github
        </button>

        <button className="relative rounded-xl p-2 transition hover:bg-slate-800">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />

        </button>

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-5
          py-2.5
          font-medium
          shadow-lg
          shadow-blue-600/20
          transition
          hover:scale-105
          "
        >

          <Play size={18} />

          Run

        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-3 py-2 hover:bg-slate-800">

          <img
            src="https://ui-avatars.com/api/?name=D"
            className="h-7 w-7 rounded-full"
            alt="profile"
          />

          <ChevronDown size={16} />

        </button>

      </div>

    </header>
  );
}