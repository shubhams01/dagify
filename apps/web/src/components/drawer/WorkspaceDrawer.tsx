"use client";

import { AnimatePresence, motion } from "framer-motion";

import DrawerHeader from "./DrawerHeader";
import DrawerOverlay from "./DrawerOverlay";
import DrawerResizeHandle from "./DrawerResizeHandle";

import { useDrawerStore } from "@/store/drawer.store";

export default function WorkspaceDrawer() {
  const {
    open,
    view,
    width,
    closeDrawer,
  } = useDrawerStore();

  return (
    <>
        {open && (
          <div
                className="
                    flex
                    h-full
                    flex-col
                    bg-[#0B1120]
                "
            >

            <DrawerHeader
              title={
                view === "workflow"
                  ? "Workflows"
                  : view === "execution"
                    ? "Executions"
                    : view === "schedule"
                      ? "Schedules"
                      : view === "connection"
                        ? "Connections"
                        : "Workspace"
              }
            />

            <div className="h-[calc(100%-72px)] overflow-auto p-5">
              {view === "workflow" && (
                <div className="text-slate-400">
                  Workflow drawer coming next...
                </div>
              )}

              {view === "execution" && (
                <div className="text-slate-400">
                  Execution drawer coming next...
                </div>
              )}

              {view === "schedule" && (
                <div className="text-slate-400">
                  Schedule drawer coming next...
                </div>
              )}

              {view === "connection" && (
                <div className="text-slate-400">
                  Connection drawer coming next...
                </div>
              )}
            </div>
          </div>
        )}
    </>
  );
}