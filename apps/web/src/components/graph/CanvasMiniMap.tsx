"use client";

import { MiniMap } from "reactflow";

export default function CanvasMiniMap() {
  return (
    <MiniMap
      pannable
      zoomable
      nodeColor="#3B82F6"
      maskColor="rgba(0,0,0,.45)"
      className="
      !rounded-xl
      !border
      !border-slate-700
      !bg-[#0F172A]
      "
    />
  );
}