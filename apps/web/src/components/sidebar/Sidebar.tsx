"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarSection from "./SidebarSection";
import SystemHealth from "./SystemHealth";

import { navigation } from "@/mock/navigation";

export default function Sidebar() {
  return (
    <aside
      className="
        flex
        h-full
        w-[270px]
        flex-col
        border-r
        border-slate-800
        bg-[#070D18]
      "
    >
      <SidebarHeader />

      <div
        className="
          flex-1
          overflow-y-auto
          px-4
          py-5
        "
      >
        {navigation.map((section) => (
          <SidebarSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>

      <SystemHealth />

    </aside>
  );
}