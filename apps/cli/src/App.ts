import { runCommand } from "./commands/run";
import { helpCommand } from "./commands/help";
import { versionCommand } from "./commands/version";

export class App {

    public async start(args: string[]): Promise<void> {

        const [command, ...rest] = args;

        switch (command) {

            case "run":
                await runCommand(rest);
                break;

            case "version":
                versionCommand();
                break;

            default:
                helpCommand();

        }

    }

}