import { Play } from "lucide-react";
import { MockExecutionRuntime } from "@/services/MockExecutionRuntime";
import { useExecution } from "@/hooks/useExecution";

export default function HeaderActions() {
  const { running } = useExecution();

  async function handleRun() {
    if (running) return;

    const runtime = new MockExecutionRuntime();

    await runtime.run();
  }

  return (
    <button
      onClick={handleRun}
      disabled={running}
      className="
      rounded-xl
      bg-blue-600
      px-5
      py-2.5
      text-white
      hover:bg-blue-500
      disabled:opacity-60
      disabled:cursor-not-allowed
      "
    >
      <div className="flex items-center gap-2">
        <Play size={16} />

        {running ? "Running..." : "Run Workflow"}
      </div>
    </button>
  );
}
