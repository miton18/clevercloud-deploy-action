"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@actions/core");
const run_1 = require("./run");
try {
    (0, run_1.run)();
}
catch (err) {
    if (err instanceof Error)
        (0, core_1.setFailed)(err.message);
    else if (typeof err === 'string')
        (0, core_1.setFailed)(err);
    else
        console.error(JSON.stringify(err));
}
