import {
    WorkflowDefinition,
    WorkflowEdge,
    WorkflowNode
} from "@dagify/shared";

export class WorkflowBuilder {

    private readonly workflow: WorkflowDefinition;

    constructor(name: string) {

        this.workflow = {

            id: crypto.randomUUID(),

            name,

            version: 1,

            nodes: [],

            edges: []

        };

    }

    node<T extends Record<string, unknown>>(
        type: string,
        config: T & { name: string }
    ): string {

        const id = crypto.randomUUID();

        const { name, ...nodeConfig } = config;

        const node: WorkflowNode = {

            id,

            type,

            name,

            config: nodeConfig

        };

        this.workflow.nodes.push(node);

        return id;

    }

    connect(
        source: string,
        target: string
    ): this {

        const edge: WorkflowEdge = {

            id: crypto.randomUUID(),

            source,

            target

        };

        this.workflow.edges.push(edge);

        return this;

    }

    build(): WorkflowDefinition {

        return structuredClone(this.workflow);

    }

}