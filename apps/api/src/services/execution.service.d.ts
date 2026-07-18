export declare class ExecutionService {
    runWorkflow(workflowId: string): Promise<{
        workflowId: string;
        runId: string;
        status: any;
        completedTasks: any;
        failedTasks: any;
        duration: any;
    }>;
}
export declare const executionService: ExecutionService;
//# sourceMappingURL=execution.service.d.ts.map