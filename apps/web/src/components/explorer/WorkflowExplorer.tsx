"use client";

import { useMemo, useState } from "react";

import {
  FolderTree,
  History,
  Plus,
} from "lucide-react";

import SearchBox from "./SearchBox";
import WorkflowCard from "./WorkflowCard";
import Section from "./Section";

import { workflows } from "@/mock/workflows";

export default function WorkflowExplorer() {

  const [search, setSearch] = useState("");

  const [selected, setSelected] =
    useState("daily-etl");

  const filtered = useMemo(() => {

    return workflows.filter((workflow) => {

      return (
        workflow.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||

        workflow.workspace
          .toLowerCase()
          .includes(search.toLowerCase())
      );

    });

  }, [search]);

  return (

    <aside
      className="
      flex
      h-full
      w-[300px]
      flex-col
      border-r
      border-slate-800
      bg-[#08101D]
      "
    >

      {/* Header */}

      <div className="border-b border-slate-800 p-5">

        <h2 className="text-xl font-semibold">

          Workflows

        </h2>

        <p className="mt-1 text-sm text-slate-500">

          Browse and manage workflows

        </p>

      </div>

      {/* Search */}

      <div className="p-5">

        <SearchBox
          value={search}
          onChange={setSearch}
        />

      </div>

      {/* Scroll */}

      <div className="flex-1 overflow-y-auto px-5">

        <Section title="Workspaces">

          <div className="space-y-2">

            {[
              "Data Engineering",
              "Finance",
              "CRM",
              "Marketing",
              "Streaming",
            ].map((workspace) => (

              <button
                key={workspace}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  text-slate-400
                  transition
                  hover:bg-slate-800
                  hover:text-white
                "
              >

                <FolderTree size={16} />

                {workspace}

              </button>

            ))}

          </div>

        </Section>

        <Section title="Workflows">

          <div className="space-y-3">

            {filtered.map((workflow) => (

              <WorkflowCard
                key={workflow.id}
                workflow={workflow}
                selected={selected === workflow.id}
                onClick={() =>
                  setSelected(workflow.id)
                }
              />

            ))}

          </div>

        </Section>

        <Section title="Recent Runs">

          <div className="space-y-2">

            {workflows.slice(0, 3).map((workflow) => (

              <button
                key={workflow.id}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  px-3
                  py-2.5
                  text-sm
                  text-slate-400
                  transition
                  hover:bg-slate-800
                  hover:text-white
                "
              >

                <History size={15} />

                {workflow.name}

              </button>

            ))}

          </div>

        </Section>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <button
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-blue-600
            py-3
            font-medium
            transition
            hover:bg-blue-500
          "
        >

          <Plus size={18} />

          New Workflow

        </button>

      </div>

    </aside>

  );

}