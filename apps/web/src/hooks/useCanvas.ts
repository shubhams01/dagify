"use client";

import { useCanvasStore } from "@/store/canvas.store";

export function useCanvas() {
  return useCanvasStore();
}