import StudioHeader from "./StudioHeader";
// import StudioSidebar from "./StudioSidebar";
import WorkflowCanvas from "../graph/WorkflowCanvas";
// import Inspector from "./Inspector";
// import Timeline from "./Timeline";

export default function Studio() {
  return (
    <div className="h-screen overflow-hidden bg-[#070B14] text-white">
      <StudioHeader />

      <main className="flex h-[calc(100vh-64px)]">
        {/* <StudioSidebar /> */}

        <section className="flex flex-1 flex-col">
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 border-r border-white/5">
              <WorkflowCanvas />
            </div>

            <div className="w-[340px]">
              {/* <Inspector /> */}
            </div>
          </div>

          {/* <Timeline /> */}
        </section>
      </main>
    </div>
  );
}
