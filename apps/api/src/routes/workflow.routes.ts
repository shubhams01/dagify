import { Router } from "express";

import { workflowController } from "../controllers/workflow.controller";

const router = Router();

router.post("/", workflowController.create);

router.get("/", workflowController.findAll);

router.get("/:id", workflowController.findById);

router.put("/:id", workflowController.update);

router.delete("/:id", workflowController.delete);

export default router;