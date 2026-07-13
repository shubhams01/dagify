import { executionOrder } from "@/mock/execution";
import { useExecutionStore } from "@/store/execution.store";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function now() {
  return new Date().toLocaleTimeString();
}

export class MockExecutionRuntime {
  async run() {
    const store = useExecutionStore.getState();

    store.start();

    store.addTimeline({
      id: crypto.randomUUID(),
      timestamp: now(),
      nodeId: "workflow",
      message: "Workflow started",
    });

    for (let index = 0; index < executionOrder.length; index++) {
      const nodeId = executionOrder[index];

      store.setNodeRunning(nodeId);

      store.addTimeline({
        id: crypto.randomUUID(),
        timestamp: now(),
        nodeId,
        message: `${nodeId} started`,
      });

      store.addLog({
        id: crypto.randomUUID(),
        timestamp: now(),
        nodeId,
        level: "info",
        message: `Executing ${nodeId}...`,
      });

      await sleep(1500);

      store.setNodeCompleted(nodeId);

      store.addTimeline({
        id: crypto.randomUUID(),
        timestamp: now(),
        nodeId,
        message: `${nodeId} completed`,
      });

      store.addLog({
        id: crypto.randomUUID(),
        timestamp: now(),
        nodeId,
        level: "info",
        message: `${nodeId} finished successfully`,
      });
    }

    store.addTimeline({
      id: crypto.randomUUID(),
      timestamp: now(),
      nodeId: "workflow",
      message: "Workflow completed",
    });

    store.stop();
  }
}
