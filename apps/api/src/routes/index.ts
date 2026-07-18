import { Router } from "express";

import workflowRoutes from "./workflow.routes";
import executionRoutes from "./execution.routes";

const router = Router();

router.get("/health", (_, res) => {
  res.json({
    success: true,
    message: "DAGify API is running",
  });
});

router.use("/workflows", workflowRoutes);
router.use("/executions", executionRoutes);

export default router;