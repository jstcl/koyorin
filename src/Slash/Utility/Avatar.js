"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash = void 0;
const discord_js_1 = require("discord.js");
exports.slash = {
    name: 'avatar',
    description: 'Returns user avatar',
    testOnly: false,
    options: [],
    run: async (client, interaction, args) => {
        const imgUrl = interaction.user.displayAvatarURL({
            size: 2048,
            dynamic: true,
        });
        const png = interaction.user.displayAvatarURL({
            size: 2048,
            format: 'png',
        });
        const jpg = interaction.user.displayAvatarURL({
            size: 2048,
            format: 'jpg',
        });
        const webp = interaction.user.displayAvatarURL({
            size: 2048,
            format: 'webp',
        });
        const gif = interaction.user.displayAvatarURL({
            size: 2048,
            format: 'gif',
        });
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`${interaction.user.username}'s Avatar`)
            .setDescription(`[PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`)
            .setImage(imgUrl)
            .setFooter(`${interaction.user.tag}`)
            .setTimestamp()
            .setColor(interaction.guild.me.displayHexColor);
        interaction.followUp({ embeds: [embed] });
    },
};
//# sourceMappingURL=Avatar.js.map