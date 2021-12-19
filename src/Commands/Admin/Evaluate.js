"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const util_1 = require("util");
const discord_js_1 = require("discord.js");
exports.command = {
    name: 'eval',
    description: 'Evaluate some code',
    aliases: ['e'],
    usage: '<code>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const code = args.join(' ');
        if (message.author.id !== process.env.OWNERID)
            return;
        if (!code)
            return message.reply('Please specify a code to evaluate!');
        try {
            const result = await eval(code);
            let output = result;
            if (typeof result !== 'string') {
                output = (0, util_1.inspect)(result);
            }
            message.channel.send({
                embeds: [
                    new discord_js_1.MessageEmbed()
                        .setColor('#00FF00')
                        .setTitle(`✅ | 200 : Success`)
                        .setDescription(`Results\n\`\`\`yml\n${output}\n\`\`\``)
                        .setFooter(`Actioned by : ${message.author.tag}`),
                ],
            });
        }
        catch (err) {
            console.log(err);
            message.channel.send({
                embeds: [
                    new discord_js_1.MessageEmbed()
                        .setTitle(`❌ | Evaluated Content too long to displayed`)
                        .setDescription(`Error Logs\n\`\`\`yml\n${err}\n\`\`\``)
                        .setColor('#FF0000')
                        .setFooter(`Actioned by : ${message.author.tag}`),
                ],
            });
        }
    },
};
//# sourceMappingURL=Evaluate.js.map