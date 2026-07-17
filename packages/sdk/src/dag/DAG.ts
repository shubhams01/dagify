import { WorkflowBuilder } from "../builders/WorkflowBuilder";

export class DAG {

    workflow(name: string): WorkflowBuilder {

        return new WorkflowBuilder(name);

    }

}

export const dag = new DAG();