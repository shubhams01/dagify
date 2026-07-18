import { CreateWorkflowInput, UpdateWorkflowInput } from "../repositories/workflow.repository";
export declare class WorkflowService {
    /**
     * Create a workflow.
     */
    create(data: CreateWorkflowInput): Promise<{
        id: string;
        name: string;
        description: string | null;
        definition: import("@prisma/client/runtime/client").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    /**
     * List workflows.
     */
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    /**
     * Get workflow by id.
     */
    findById(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        definition: import("@prisma/client/runtime/client").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    /**
     * Update workflow.
     */
    update(id: string, data: UpdateWorkflowInput): Promise<{
        id: string;
        name: string;
        description: string | null;
        definition: import("@prisma/client/runtime/client").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
    /**
     * Delete workflow.
     */
    delete(id: string): Promise<void>;
    /**
     * Workflow validation.
     *
     * More validation rules will be added later.
     */
    private validateDefinition;
}
export declare const workflowService: WorkflowService;
//# sourceMappingURL=workflow.service.d.ts.map