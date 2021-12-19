"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const discord_js_1 = require("discord.js");
exports.event = {
    name: 'messageCreate',
    run: async (client, message) => {
        if (message.channel.type === 'DM')
            return;
        if (message.author.bot || !message.content.startsWith(client.config.PREFIX))
            return;
        const args = message.content
            .slice(client.config.PREFIX.length)
            .trim()
            .split(/ +/g);
        const cmd = args.shift().toLowerCase();
        if (!cmd)
            return;
        const command = client.commands.get(cmd) || client.aliases.get(cmd);
        const validPermissions = Object.keys(discord_js_1.Permissions.FLAGS);
        if (command) {
            if (command.testOnly && message.guild.id !== client.config.TESTSERVER)
                return;
            if (command?.permissions && command?.permissions.length !== 0) {
                let invalidPerms = [];
                for (const perm of command.permissions) {
                    if (!validPermissions.includes(perm.toString())) {
                        client.console.error(`Invalid Permission: ${perm}`);
                        return message.channel.send(`Error in our code: invalid permission: \`${perm}\`, please contact the developer`);
                    }
                    if (!message.member.permissions.has([perm])) {
                        invalidPerms.push(perm);
                    }
                }
                if (invalidPerms.length) {
                    const embed = new discord_js_1.MessageEmbed()
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                        .setDescription(`**MISSING PERMISSIONS**: \`${invalidPerms}\``);
                    return message.reply({ embeds: [embed] });
                }
            }
            try {
                command.run(client, message, args);
            }
            catch (e) {
                const embed = new discord_js_1.MessageEmbed()
                    .setAuthor(client.user.username, client.user.displayAvatarURL())
                    .setDescription(`**ERROR**: \`${e}\``)
                    .setColor('RED');
                message.channel.send({ embeds: [embed] }).then((m) => setTimeout(() => {
                    m.delete();
                }, 10000));
            }
        }
    },
};
//# sourceMappingURL=Message.js.map