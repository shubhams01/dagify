import { dag } from "./index";

const workflow = dag.workflow("User Sync");

const fetch = workflow.node("postgres", {

    name: "Fetch Users",

    query: "SELECT * FROM users"

});

const update = workflow.node("postgres", {

    name: "Update Users",

    query: "UPDATE users SET active=true"

});

workflow
    .connect(fetch, update);

console.log(

    JSON.stringify(

        workflow.build(),

        null,

        2

    )

);