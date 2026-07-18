"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workflowRepository = exports.WorkflowRepository = void 0;
const prisma_1 = require("../lib/prisma");
class WorkflowRepository {
    /**
     * Create a workflow.
     */
    async create(data) {
        return prisma_1.prisma.workflow.create({
            data,
        });
    }
    /**
     * Returns lightweight workflow list.
     * Does not include definition JSON.
     */
    async findAll() {
        return prisma_1.prisma.workflow.findMany({
            select: {
                id: true,
                name: true,
                description: true,
                createdAt: true,
                updatedAt: true,
            },
            orderBy: {
                updatedAt: "desc",
            },
        });
    }
    /**
     * Returns full workflow including definition.
     */
    async findById(id) {
        return prisma_1.prisma.workflow.findUnique({
            where: {
                id,
            },
        });
    }
    /**
     * Returns true if workflow exists.
     */
    async exists(id) {
        const count = await prisma_1.prisma.workflow.count({
            where: {
                id,
            },
        });
        return count > 0;
    }
    /**
     * Update workflow.
     */
    async update(id, data) {
        return prisma_1.prisma.workflow.update({
            where: {
                id,
            },
            data,
        });
    }
    /**
     * Delete workflow.
     */
    async delete(id) {
        return prisma_1.prisma.workflow.delete({
            where: {
                id,
            },
        });
    }
}
exports.WorkflowRepository = WorkflowRepository;
exports.workflowRepository = new WorkflowRepository();
//# sourceMappingURL=workflow.repository.js.map