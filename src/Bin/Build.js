"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const consola_1 = __importDefault(require("consola"));
consola_1.default.info('Building source file from ./src...');
(0, child_process_1.exec)('yarn run build:native', (err, stdout, stderr) => {
    if (stderr)
        return consola_1.default.error(stderr);
    consola_1.default.success('Successfully transpiled source file into ./dist');
    consola_1.default.log('🚀 Source file has been transpiled to JavaScript code!');
});
//# sourceMappingURL=Build.js.map