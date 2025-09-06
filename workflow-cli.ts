#!/usr/bin/env node --experimental-strip-types --disable-warning=ExperimentalWarning

import metaWorkflows from "./package/src/workflows/index.js";
import { runWorkflowCli } from "./package/src/index.js";

runWorkflowCli([
  // workflows/add-workflow HOOK - do not remove this line
  ...metaWorkflows,
]);
