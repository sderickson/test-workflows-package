import {
  defineWorkflow,
  step,
  CommandStepMachine,
} from "saflib-workflows";

const input = [] as const;
interface HelloWorkflowContext {}

export const HelloWorkflowDefinition =
  defineWorkflow<
    typeof input,
    HelloWorkflowContext
  >({
    id: "demo/hello-workflow",
    description: "Say hello to the world",
    input,
    sourceUrl: import.meta.url,
    context: () => ({}),
    templateFiles: {},
    docFiles: {},
    steps: [
      step(CommandStepMachine, () => ({
        command: "echo",
        args: ["Hello, world!"],
      })),
    ],
  });

export default HelloWorkflowDefinition;