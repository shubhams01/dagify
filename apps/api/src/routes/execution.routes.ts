import { Router } from "express";

import { executionController } from "../controllers/execution.controller";

const router = Router();

router.post(
  "/:id/run",
  executionController.run.bind(
    executionController,
  ),
);

export default router;