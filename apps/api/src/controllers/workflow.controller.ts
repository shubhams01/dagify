import { Request, Response } from "express";
import { z } from "zod";

import { workflowService } from "../services/workflow.service";

const createWorkflowSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

export class WorkflowController {
  async create(req: Request, res: Response) {
    const body = createWorkflowSchema.parse(req.body);

    const workflow = await workflowService.create(
      body.name,
      body.description,
    );

    res.status(201).json({
      success: true,
      data: workflow,
    });
  }

  async findAll(req: Request, res: Response) {
    const workflows = await workflowService.findAll();

    res.json({
      success: true,
      data: workflows,
    });
  }

  async findById(req: Request, res: Response) {
    const workflow = await workflowService.findById(
      req.params.id,
    );

    if (!workflow) {
      return res.status(404).json({
        success: false,
        message: "Workflow not found",
      });
    }

    res.json({
      success: true,
      data: workflow,
    });
  }

  async update(req: Request, res: Response) {
    const workflow = await workflowService.update(
      req.params.id,
      req.body,
    );

    res.json({
      success: true,
      data: workflow,
    });
  }

  async delete(req: Request, res: Response) {
    await workflowService.delete(req.params.id);

    res.status(204).send();
  }
}

export const workflowController =
  new WorkflowController();