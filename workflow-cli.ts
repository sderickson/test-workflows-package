#!/usr/bin/env node --experimental-strip-types --disable-warning=ExperimentalWarning

import metaWorkflows from "saflib-workflows/workflows";
import { runWorkflowCli } from "saflib-workflows";
// import { TestWorkflowDefinition } from "./workflows/test.ts";

runWorkflowCli([
  // workflows/add-workflow HOOK - do not remove this line
  ...metaWorkflows,
  // TestWorkflowDefinition,
]);
