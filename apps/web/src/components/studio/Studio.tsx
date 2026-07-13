import StudioHeader from "@/components/header/StudioHeader"; // import StudioSidebar from "./StudioSidebar";
import Sidebar from "@/components/sidebar/Sidebar";
import WorkflowCanvas from "../graph/WorkflowCanvas";
import WorkflowExplorer from "@/components/explorer/WorkflowExplorer";
// import Inspector from "./Inspector";
// import Timeline from "./Timeline";
import BottomPanel from "@/components/execution/BottomPanel";

export default function Studio() {
  return (
    <div className="flex h-screen flex-col">
      <StudioHeader />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex flex-1">
          <WorkflowCanvas />

          {/* <Inspector /> */}
        </div>
      </div>

      {/* <BottomPanel /> */}
    </div>
  );
}
