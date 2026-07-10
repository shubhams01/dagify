import { Graph } from "../graph";
import { Task } from "./Task";

export class Workflow {

    public readonly id: string;

    private readonly graph =
        new Graph<Task>();

    constructor(id: string) {

        if (!id.trim()) {
            throw new Error("Workflow id cannot be empty.");
        }

        this.id = id;
    }

    task(task: Task): this {

        this.graph.addNode(
            task.id,
            task
        );

        return this;
    }

    dependsOn(
        taskId: string,
        dependencyId: string
    ): this {

        this.graph.addEdge(
            dependencyId,
            taskId
        );

        return this;
    }

    getTask(id: string): Task {

        return this.graph
            .getNode(id)
            .value;
    }

    getTasks(): readonly Task[] {

        return this.graph
            .values()
            .map(node => node.value);
    }

    getDependencies(taskId: string) {

        return this.graph
            .predecessors(taskId);
    }

    getDependents(taskId: string) {

        return this.graph
            .successors(taskId);
    }

    hasTask(id: string): boolean {

        return this.graph
            .hasNode(id);
    }

    get size() {

        return this.graph.size;
    }

    /**
     * Internal graph access.
     * Algorithms use this.
     */
    getGraph() {

        return this.graph;
    }

}