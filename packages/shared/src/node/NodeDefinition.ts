import { NodeCategory } from "./NodeCategory";
import { NodePort } from "./NodePort";

export interface NodeDefinition {
  type: string;

  title: string;

  description: string;

  version: string;

  category: NodeCategory;

  icon: string;

  color: string;

  inputs: NodePort[];

  outputs: NodePort[];

  defaultConfig: Record<string, unknown>;
}