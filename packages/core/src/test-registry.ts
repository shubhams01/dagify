import {
    DelayExecutor,
    ExecutorRegistry,
    // NoOpExecutor
} from "./executor";

const registry =
    new ExecutorRegistry();

// registry.register(
//     new NoOpExecutor()
// );

registry.register(
    new DelayExecutor()
);

console.log(

    registry.getAll()

);