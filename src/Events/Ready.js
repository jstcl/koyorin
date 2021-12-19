"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const chalk_1 = __importDefault(require("chalk"));
exports.event = {
    name: 'ready',
    run: async (client) => {
        client.console.success(`${chalk_1.default.bold.green(`[CLIENT]`)} ${client.user.tag} Ready`);
        // Set status to Idle
        client.user.setStatus('idle');
        // Set activity presence
        client.user.setActivity({
            name: `with My Husband 💕`,
            type: 'PLAYING',
        });
    },
};
//# sourceMappingURL=Ready.js.map