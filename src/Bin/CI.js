"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const consola_1 = __importDefault(require("consola"));
// Starting CI Process
consola_1.default.info('Starting CI Process...\n');
// Code Format Checking CI
consola_1.default.info('Running Code Format Checking CI...');
(0, child_process_1.exec)('yarn run check-format', (err, stdout, stderr) => {
    if (stderr)
        return consola_1.default.error(stderr);
    consola_1.default.success('Code Format Checking Passing.\n');
    // Linters CI
    consola_1.default.info('Running Linters CI...');
    (0, child_process_1.exec)('yarn run lint', (err, stdout, stderr) => {
        if (stderr)
            return consola_1.default.error(stderr);
        consola_1.default.success('Linters Passing.\n');
        // Display success message.
        consola_1.default.log('🚀 This code is ready to push and deployed!');
    });
});
//# sourceMappingURL=CI.js.map