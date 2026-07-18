import { Router } from "express";
import { workflowController } from "../controllers/workflow.controller";

const router = Router();

router.get(
  "/",
  workflowController.findAll.bind(workflowController),
);

router.get(
  "/:id",
  workflowController.findById.bind(workflowController),
);

router.post(
  "/",
  workflowController.create.bind(workflowController),
);

router.put(
  "/:id",
  workflowController.update.bind(workflowController),
);

router.delete(
  "/:id",
  workflowController.delete.bind(workflowController),
);

export default router;