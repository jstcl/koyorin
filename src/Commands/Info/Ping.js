"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
exports.command = {
    name: 'ping',
    description: 'Shows client latency ping',
    aliases: ['p'],
    usage: 'ping',
    testOnly: true,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(`Ping Latency : ${client.ws.ping}ms!`)
            .setColor('LUMINOUS_VIVID_PINK');
        message.channel.send({ embeds: [embed] });
    },
};
//# sourceMappingURL=Ping.js.map