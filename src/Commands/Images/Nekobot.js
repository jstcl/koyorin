"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.command = {
    name: 'nekobot',
    description: 'Get an images from nekobot.xyz',
    aliases: ['nekob'],
    usage: '[endpoint]',
    testOnly: false,
    permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
    run: async (client, message, args) => {
        let endpoint = args.join(' ');
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply({ content: `Not an NSFW Channel!` });
        if (!endpoint)
            endpoint = 'kemonomimi';
        (0, node_fetch_1.default)(`https://nekobot.xyz/api/image?type=${endpoint}`)
            .then((res) => res.json())
            .then((body) => {
            message.channel.send({ content: `${body.message}` });
        });
    },
};
//# sourceMappingURL=Nekobot.js.map