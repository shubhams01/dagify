import {
  NodeCategory,
  NodeDefinition
} from "@dagify/shared";

export const postgresNode: NodeDefinition = {
  type: "postgres",

  title: "PostgreSQL",

  description:
    "Execute PostgreSQL queries",

  version: "1.0.0",

  category: NodeCategory.DATABASE,

  icon: "database",

  color: "#336791",

  inputs: [
    {
      id: "input",

      name: "Input",

      required: false
    }
  ],

  outputs: [
    {
      id: "output",

      name: "Output",

      required: false
    }
  ],

  defaultConfig: {
    connection: "",

    query: ""
  }
};