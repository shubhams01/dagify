"use client";

import {
  Hand,
  Lock,
  LockOpen,
  Maximize2,
  Minus,
  MousePointer2,
  Plus,
  RotateCcw,
} from "lucide-react";

import { useMemo } from "react";
import { useReactFlow, useViewport } from "reactflow";

interface CanvasToolbarProps {
  tool: "pointer" | "hand";
  locked: boolean;
  setTool: (tool: "pointer" | "hand") => void;
  setLocked: (locked: boolean) => void;
}

export default function CanvasToolbar({
  tool,
  locked,
  setTool,
  setLocked,
}: CanvasToolbarProps) {
  const {
    zoomIn,
    zoomOut,
    fitView,
    setViewport,
  } = useReactFlow();

  const { zoom } = useViewport();

  const zoomPercentage = useMemo(() => {
    return `${Math.round(zoom * 100)}%`;
  }, [zoom]);

  return (
    <div className="absolute left-1/2 top-5 z-50 -translate-x-1/2">

      <div
        className="
        flex
        items-center
        gap-1
        rounded-2xl
        border
        border-slate-700
        bg-[#111827]/90
        p-2
        shadow-2xl
        backdrop-blur-xl
      "
      >
        {/* Pointer */}

        <ToolbarButton
          active={tool === "pointer"}
          onClick={() => setTool("pointer")}
        >
          <MousePointer2 size={18} />
        </ToolbarButton>

        {/* Hand */}

        <ToolbarButton
          active={tool === "hand"}
          onClick={() => setTool("hand")}
        >
          <Hand size={18} />
        </ToolbarButton>

        <Divider />

        {/* Zoom In */}

        <ToolbarButton onClick={() => zoomIn()}>
          <Plus size={18} />
        </ToolbarButton>

        {/* Zoom Out */}

        <ToolbarButton onClick={() => zoomOut()}>
          <Minus size={18} />
        </ToolbarButton>

        {/* Zoom */}

        <div
          className="
          min-w-[60px]
          text-center
          text-xs
          font-semibold
          text-slate-400
        "
        >
          {zoomPercentage}
        </div>

        <Divider />

        {/* Fit */}

        <ToolbarButton
          onClick={() =>
            fitView({
              duration: 500,
              padding: 0.2,
            })
          }
        >
          <Maximize2 size={18} />
        </ToolbarButton>

        {/* Reset */}

        <ToolbarButton
          onClick={() =>
            setViewport({
              x: 0,
              y: 0,
              zoom: 1,
            })
          }
        >
          <RotateCcw size={18} />
        </ToolbarButton>

        <Divider />

        {/* Lock */}

        <ToolbarButton
          active={locked}
          onClick={() => setLocked(!locked)}
        >
          {locked ? (
            <Lock size={18} />
          ) : (
            <LockOpen size={18} />
          )}
        </ToolbarButton>

      </div>

    </div>
  );
}

function Divider() {
  return (
    <div className="mx-1 h-6 w-px bg-slate-700" />
  );
}

interface ToolbarButtonProps {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

function ToolbarButton({
  active,
  onClick,
  children,
}: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-xl
        p-2.5
        transition-all
        duration-200

        ${
          active
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }
      `}
    >
      {children}
    </button>
  );
}