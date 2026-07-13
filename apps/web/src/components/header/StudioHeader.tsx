"use client";

import Breadcrumb from "./Breadcrumb";
import EngineSelector from "./EngineSelector";
import HeaderActions from "./HeaderActions";
import HeaderSearch from "./HeaderSearch";

export default function StudioHeader() {
  return (
    <header
      className="
        flex
        h-20
        items-center
        justify-between
        border-b
        border-slate-800
        bg-[#070D18]
        px-8
      "
    >
      <Breadcrumb />

      <div className="flex items-center gap-4">

        <HeaderSearch />

        <EngineSelector />

        <HeaderActions />

      </div>

    </header>
  );
}