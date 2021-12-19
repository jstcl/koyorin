"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const pretty_ms_1 = __importDefault(require("pretty-ms"));
const discord_js_1 = require("discord.js");
exports.command = {
    name: 'uptime',
    description: 'Show client uptime',
    aliases: ['up'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(`🕘 Uptime : ${(0, pretty_ms_1.default)(client.uptime)}`)
            .setColor('LUMINOUS_VIVID_PINK');
        message.channel.send({ embeds: [embed] });
    },
};
//# sourceMappingURL=Uptime.js.map