"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const cabul_1 = require("cabul");
const reddit = new cabul_1.Client();
exports.command = {
    name: 'lactation',
    description: 'Art depicting erotic lactation',
    aliases: [],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES', 'ADD_REACTIONS'],
    run: async (client, message, args) => {
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply('Not an NSFW Channel!');
        reddit
            .lactation()
            .then((rlist) => {
            const img = rlist.data.url_overridden_by_dest;
            message.channel.send({ content: img }).then((msg) => {
                msg.react('👍');
                msg.react('👎');
            });
        })
            .catch((err) => {
            console.log(err);
        });
    },
};
//# sourceMappingURL=lactation.js.map