"use client";

import {
  Background,
  BackgroundVariant,
} from "reactflow";

export default function CanvasBackground() {
  return (
    <Background
      variant={BackgroundVariant.Cross}
      gap={32}
      size={1}
      color="#233044"
    />
  );
}