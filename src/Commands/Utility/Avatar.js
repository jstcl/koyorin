"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
exports.command = {
    name: 'avatar',
    description: 'Shows user avatar',
    aliases: ['pfp'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
    run: async (client, message, args) => {
        const imgUrl = message.author.displayAvatarURL({
            size: 2048,
            dynamic: true,
        });
        const png = message.author.displayAvatarURL({ size: 2048, format: 'png' });
        const jpg = message.author.displayAvatarURL({ size: 2048, format: 'jpg' });
        const webp = message.author.displayAvatarURL({
            size: 2048,
            format: 'webp',
        });
        const gif = message.author.displayAvatarURL({ size: 2048, format: 'gif' });
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`${message.author.username}'s Avatar`)
            .setDescription(`[PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`)
            .setImage(imgUrl)
            .setFooter(`${message.author.tag}`)
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send({ embeds: [embed] });
    },
};
//# sourceMappingURL=Avatar.js.map