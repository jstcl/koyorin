"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.command = {
    name: 'nekos',
    description: 'Get an images from nekos.life',
    aliases: ['nekos-life', 'nl'],
    usage: '[type]',
    testOnly: false,
    permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
    run: async (client, message, args) => {
        let type = args.join(' ');
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply({ content: `Not an NSFW Channel!` });
        if (!type)
            type = 'lewd';
        (0, node_fetch_1.default)(`https://nekos.life/api/v2/img/${type}`)
            .then((res) => res.json())
            .then((body) => {
            message.channel.send({ content: `${body.url}` });
        })
            .catch((err) => {
            console.log(err);
        });
    },
};
//# sourceMappingURL=Nekos-life.js.map