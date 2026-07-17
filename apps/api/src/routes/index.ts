import { Router } from "express";

import workflowRoutes from "./workflow.routes";

const router = Router();

router.get("/health", (_, res) => {
  res.json({
    success: true,
    message: "DAGify API is running",
  });
});

router.use("/workflows", workflowRoutes);

export default router;