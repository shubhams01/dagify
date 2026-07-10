import path from "node:path";
import { pathToFileURL } from "node:url";

export class WorkflowLoader {
  public async load(file: string) {
    const absolute = path.resolve(file);

    const module = await import(pathToFileURL(absolute).href);

    return module.default;
  }
}
