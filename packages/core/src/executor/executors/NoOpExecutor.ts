import { Executor } from "../Executor";

export class NoOpExecutor
    implements Executor {

    readonly type = "noop";

    async execute(): Promise<void> {

        console.log(
            "[NoOp] Executed."
        );

    }

}