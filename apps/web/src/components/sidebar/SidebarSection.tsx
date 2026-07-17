"use client";

import SidebarItem from "./SidebarItem";
import type { NavigationItem } from "@/mock/navigation";

interface SidebarSectionProps {
    title: string;

    items: NavigationItem[];
}
// interface SidebarSectionProps {
//   title: string;

//   items: {
//     title: string;
//     icon: any;
//     active?: boolean;
//     badge?: number;
//   }[];
// }

export default function SidebarSection({
  title,
  items,
}: SidebarSectionProps) {
  return (
    <div className="mb-8">

      <h3
        className="
          mb-3
          px-2
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-slate-500
        "
      >
        {title}
      </h3>

      <div className="space-y-1">

        {items.map((item) => (
          <SidebarItem
            key={item.title}
            {...item}
          />
        ))}

      </div>

    </div>
  );
}