import type { WorkflowDefinition } from "@dagify/shared";
export interface CreateWorkflowInput {
    name: string;
    description?: string;
    definition: WorkflowDefinition;
}
export interface UpdateWorkflowInput {
    name?: string;
    description?: string;
    definition?: WorkflowDefinition;
}
export declare class WorkflowRepository {
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
     * Returns lightweight workflow list.
     * Does not include definition JSON.
     */
    findAll(): Promise<{
        id: string;
        name: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    /**
     * Returns full workflow including definition.
     */
    findById(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        definition: import("@prisma/client/runtime/client").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    /**
     * Returns true if workflow exists.
     */
    exists(id: string): Promise<boolean>;
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
    delete(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        definition: import("@prisma/client/runtime/client").JsonValue;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export declare const workflowRepository: WorkflowRepository;
//# sourceMappingURL=workflow.repository.d.ts.map