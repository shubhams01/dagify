import { Request, Response } from "express";
export declare class WorkflowController {
    /**
     * POST /workflows
     */
    create(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    /**
     * GET /workflows
     */
    findAll(_: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    /**
     * GET /workflows/:id
     */
    findById(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    /**
     * PUT /workflows/:id
     */
    update(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    /**
     * DELETE /workflows/:id
     */
    delete(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    private handleError;
}
export declare const workflowController: WorkflowController;
//# sourceMappingURL=workflow.controller.d.ts.map