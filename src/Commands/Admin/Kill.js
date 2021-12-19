"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
exports.command = {
    name: 'kill',
    description: 'Kill client sessions',
    aliases: ['destroy'],
    usage: '[reasons]',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        // Reasons declaration
        let reasons = args.join(' ');
        // Owner ID Checking & Reasons Checking
        if (message.author.id !== process.env.OWNERID)
            return;
        if (!reasons)
            reasons = 'No reasons.';
        // Send success message
        await message.channel.send({
            embeds: [
                new discord_js_1.MessageEmbed()
                    .setTitle('✅ Successfully Killed!')
                    .setThumbnail(client.user.displayAvatarURL({ size: 512 }))
                    .setDescription(`Successfully Destroyed Client Sessions with Exit Code 1`)
                    .addField('Reasons', `\`${reasons}\``)
                    .setColor('GREEN')
                    .setFooter(`Restarted by ${message.author.username}`)
                    .setTimestamp(),
            ],
        });
        // Destroy the client
        return client.destroy();
    },
};
//# sourceMappingURL=Kill.js.map