export declare class WorkflowRunner {
    run(workflowId: string): Promise<{
        workflowId: string;
        runId: string;
        status: any;
        completedTasks: any;
        failedTasks: any;
        duration: any;
    }>;
}
export declare const workflowRunner: WorkflowRunner;
//# sourceMappingURL=workflow.runner.d.ts.map