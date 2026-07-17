"use client";

import { useRef } from "react";

import { useDrawerStore } from "@/store/drawer.store";

export default function DrawerResizeHandle() {
  const dragging = useRef(false);

  const setWidth = useDrawerStore(
    (state) => state.setWidth,
  );

  function startDrag() {
    dragging.current = true;

    window.addEventListener("mousemove", resize);

    window.addEventListener("mouseup", stopDrag);
  }

  function resize(event: MouseEvent) {
    if (!dragging.current) return;

    const width = window.innerWidth - event.clientX;

    setWidth(width);
  }

  function stopDrag() {
    dragging.current = false;

    window.removeEventListener("mousemove", resize);

    window.removeEventListener("mouseup", stopDrag);
  }

  return (
    <div
      onMouseDown={startDrag}
      className="
        absolute
        left-0
        top-0
        h-full
        w-1.5
        cursor-col-resize
        bg-transparent
        hover:bg-blue-500/50
        transition-colors
      "
    />
  );
}