import { NodeCatalog } from "./catalog/NodeCatalog";
import { postgresNode } from "./definitions/database/postgres";

export const nodeCatalog = new NodeCatalog();

nodeCatalog.register(postgresNode);

export { dag } from "./dag/DAG";

export * from "./builders";
export * from "./catalog/NodeCatalog";
export * from "./compiler";