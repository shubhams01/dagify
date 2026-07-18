import { Request, Response } from "express";

import { executionService } from "../services/execution.service";

export class ExecutionController {

  async run(
    req: Request,
    res: Response,
  ) {

    try {

      const result =
        await executionService.runWorkflow(
          req.params.id,
        );

      return res.status(200).json(result);

    } catch (error) {

      return res.status(400).json({

        message:
          error instanceof Error
            ? error.message
            : "Execution failed.",

      });

    }

  }

}

export const executionController =
  new ExecutionController();