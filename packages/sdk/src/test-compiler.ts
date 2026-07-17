import { dag, WorkflowCompiler } from "./index";

const workflow = dag.workflow("Demo");

const delay = workflow.node("delay", {
  name: "Wait",
  ms: 1000
});

const postgres = workflow.node("postgres", {
  name: "Query Users",
  query: "SELECT * FROM users"
});

workflow.connect(delay, postgres);

const definition = workflow.build();

const compiler = new WorkflowCompiler();

const runtimeWorkflow =
  compiler.compile(definition);

console.log(runtimeWorkflow.getTasks());

console.log(runtimeWorkflow.getDependencies(postgres));