import { Request, Response } from "express";
import { workflowService } from "../services/workflow.service";

export class WorkflowController {
  /**
   * POST /workflows
   */
  async create(req: Request, res: Response) {
    try {
      const workflow = await workflowService.create(req.body);

      return res.status(201).json(workflow);
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  /**
   * GET /workflows
   */
  async findAll(_: Request, res: Response) {
    try {
      const workflows = await workflowService.findAll();

      return res.json(workflows);
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  /**
   * GET /workflows/:id
   */
  async findById(req: Request, res: Response) {
    try {
      const workflow = await workflowService.findById(req.params.id);

      return res.json(workflow);
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  /**
   * PUT /workflows/:id
   */
  async update(req: Request, res: Response) {
    try {
      const workflow = await workflowService.update(
        req.params.id,
        req.body,
      );

      return res.json(workflow);
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  /**
   * DELETE /workflows/:id
   */
  async delete(req: Request, res: Response) {
    try {
      await workflowService.delete(req.params.id);

      return res.status(204).send();
    } catch (error) {
      return this.handleError(res, error);
    }
  }

  private handleError(
    res: Response,
    error: unknown,
  ) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }

    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export const workflowController =
  new WorkflowController();