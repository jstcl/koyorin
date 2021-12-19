"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const Holodex_1 = __importDefault(require("../../Exports/Holodex"));
exports.command = {
    name: 'upcoming-stream',
    description: 'Query and See Upcoming Stream from a channel',
    aliases: ['next-stream'],
    usage: '<channelId: string>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const channelId = args.join(' ');
        if (!channelId)
            return message.reply({ content: 'Please specify channel id!' });
        Holodex_1.default
            .getLiveVideosByChannelId(channelId)
            .then((vid) => {
            const data = vid[0];
            const youtubeUrl = `https://youtu.be/${data.videoId}`;
            message.channel.send({ content: youtubeUrl });
        })
            .catch((err) => console.log(err));
    },
};
//# sourceMappingURL=Upcoming-stream.js.map