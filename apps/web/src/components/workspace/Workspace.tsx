"use client";

import { AnimatePresence, motion } from "framer-motion";

import WorkflowCanvas from "@/components/graph/WorkflowCanvas";
import WorkspaceDrawer from "@/components/drawer/WorkspaceDrawer";
import { useDrawerStore } from "@/store/drawer.store";

export default function Workspace() {
  const open = useDrawerStore((state) => state.open);

  const width = useDrawerStore((state) => state.width);

  return (
    <div className="flex flex-1 overflow-hidden bg-[#030712]">
      {/* Canvas */}
      <motion.div
        layout
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="min-w-0 flex-1"
      >
        <WorkflowCanvas />
      </motion.div>

      {/* Drawer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width,
              opacity: 1,
            }}
            exit={{
              width: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              shrink-0
              overflow-hidden
              border-l
              border-slate-800
              bg-[#0B1120]
            "
          >
            <WorkspaceDrawer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}