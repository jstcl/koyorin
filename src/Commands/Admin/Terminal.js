"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
const child_process_1 = require("child_process");
exports.command = {
    name: 'terminal',
    description: 'Runs terminal command',
    aliases: ['bash', 'sh', 'zsh'],
    usage: '<command>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const cmds = args.join(' ');
        if (message.author.id !== process.env.OWNERID)
            return;
        if (!cmds)
            return message.reply('Please specify a command to executed!');
        (0, child_process_1.exec)(cmds, (err, stdout, stderr) => {
            if (err)
                return message.channel.send({ content: `\`\`\`\n${err}\n\`\`\`` });
            if (stderr)
                return message.channel.send({
                    content: `zsh: command not found: ${cmds}`,
                });
            message.channel.send({
                embeds: [
                    new discord_js_1.MessageEmbed()
                        .setTitle('Terminal - GNU Bash')
                        .setDescription(`\`\`\`js\n${stdout.slice(0, 2000)}\`\`\``)
                        .setFooter(`GNU Bash - Actioned by ${message.author.tag}`)
                        .setColor('LUMINOUS_VIVID_PINK'),
                ],
            });
        });
    },
};
//# sourceMappingURL=Terminal.js.map