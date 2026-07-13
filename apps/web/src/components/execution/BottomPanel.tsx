"use client";

import { useState } from "react";

import BottomTabs from "./BottomTabs";

export default function BottomPanel() {
  const [tab, setTab] = useState("timeline");

  return (
    <section
      className="
      flex
      h-[280px]
      flex-col
      border-t
      border-slate-800
      bg-[#08101D]
    "
    >
      <BottomTabs
        active={tab}
        onChange={setTab}
      />

      <div className="flex flex-1 overflow-hidden">

        {/* Left */}

        <div
          className="
          flex-1
          border-r
          border-slate-800
          p-5
        "
        >
          {tab === "timeline" && (
            <div className="h-full">

              <h2 className="mb-4 text-lg font-semibold">

                Execution Timeline

              </h2>

              <div className="space-y-4">

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">

                  <div className="text-sm font-medium text-white">

                    Workflow Started

                  </div>

                  <div className="mt-1 text-xs text-slate-500">

                    12:01:01

                  </div>

                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">

                  <div className="text-sm font-medium text-white">

                    Extract Started

                  </div>

                  <div className="mt-1 text-xs text-slate-500">

                    12:01:02

                  </div>

                </div>

              </div>

            </div>
          )}

          {tab === "metrics" && (
            <div className="grid grid-cols-4 gap-4">

              <Metric
                title="Duration"
                value="2m 12s"
              />

              <Metric
                title="Completed"
                value="12"
              />

              <Metric
                title="Running"
                value="1"
              />

              <Metric
                title="Queued"
                value="4"
              />

            </div>
          )}

          {tab === "events" && (
            <div className="text-slate-400">

              No events

            </div>
          )}

          {tab === "variables" && (
            <div className="text-slate-400">

              No variables

            </div>
          )}

          {tab === "output" && (
            <div className="text-slate-400">

              No output

            </div>
          )}
        </div>

        {/* Right */}

        <div className="w-[360px] p-5">

          <h2 className="mb-4 text-lg font-semibold">

            Live Logs

          </h2>

          <div className="space-y-3">

            <LogRow
              level="INFO"
              message="Connecting PostgreSQL..."
            />

            <LogRow
              level="INFO"
              message="Query executed"
            />

            <LogRow
              level="INFO"
              message="2045 rows fetched"
            />

            <LogRow
              level="INFO"
              message="Workflow completed"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

function Metric({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">

      <div className="text-sm text-slate-400">

        {title}

      </div>

      <div className="mt-3 text-2xl font-bold">

        {value}

      </div>

    </div>
  );
}

function LogRow({
  level,
  message,
}: {
  level: string;
  message: string;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">

      <div className="flex items-center justify-between">

        <span className="rounded bg-blue-600 px-2 py-1 text-[10px]">

          {level}

        </span>

        <span className="text-xs text-slate-500">

          12:01:02

        </span>

      </div>

      <div className="mt-3 text-sm">

        {message}

      </div>

    </div>
  );
}