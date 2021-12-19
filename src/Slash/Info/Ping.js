"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash = void 0;
const discord_js_1 = require("discord.js");
exports.slash = {
    name: 'ping',
    description: 'Shows client ping latency',
    testOnly: false,
    options: [],
    run: async (client, interaction, args) => {
        const embed = new discord_js_1.MessageEmbed()
            .setDescription(`Ping Latency : ${client.ws.ping}ms!`)
            .setColor('LUMINOUS_VIVID_PINK');
        interaction.followUp({ embeds: [embed] });
    },
};
//# sourceMappingURL=Ping.js.map