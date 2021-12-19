"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
exports.command = {
    name: 'help',
    description: 'Show this help desk',
    aliases: ['h'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle('Koyori Help Desk')
            .setImage(`https://cdn.upload.systems/uploads/HPAkGOVy.jpg`)
            .setDescription(`Hello there! I'm Koyori here~! Maids and Helpers in this server! 🧪\n\nLooking for Command List? Oh, Here is it!\n\nYou can see Full Command List at\n[gifaldyazka.is-a.dev/koyori-dscbot/p/commands](https://gifaldyazka.is-a.dev/koyori-dscbot/p/commands)!`)
            // .setThumbnail(message.client.user.displayAvatarURL({ size: 512 }))
            .setColor('LUMINOUS_VIVID_PINK')
            .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();
        message.channel.send({ embeds: [embed] });
    },
};
//# sourceMappingURL=Help.js.map