"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash = void 0;
const pretty_ms_1 = __importDefault(require("pretty-ms"));
const discord_js_1 = require("discord.js");
exports.slash = {
    name: 'uptime',
    description: 'Shows client uptime',
    testOnly: false,
    options: [],
    run: async (client, interaction, args) => {
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(`🕘 Uptime : ${(0, pretty_ms_1.default)(client.uptime)}`)
            .setColor('LUMINOUS_VIVID_PINK');
        interaction.followUp({ embeds: [embed] });
    },
};
//# sourceMappingURL=Uptime.js.map