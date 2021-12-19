"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const Picture_1 = __importDefault(require("../../Schema/Picture"));
const originChannel = process.env.ORIGIN_CHANNEL;
exports.command = {
    name: 'get',
    description: 'Backup all NSFW Data in Schema to Specified Channel',
    aliases: ['nsfw-backup'],
    usage: '<#channel>',
    testOnly: false,
    permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
    run: async (client, message, args) => {
        if (message.author.id !== '788260234409672754')
            return;
        Picture_1.default.find({ Channel: originChannel }, async (err, data) => {
            if (!data)
                return message.reply("There's no matched channel id at the database with this discord server. Please ensure to checking channel id!");
            if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
                return message.reply({ content: 'This is not a NSFW Channel!' });
            message.channel.send({
                content: `Started to backupping stored data from <#${originChannel}> to <#${message.channel.id}>...`,
            });
            data.map((x) => {
                message.channel.send({ content: `${x.Url}` });
            });
        });
    },
};
//# sourceMappingURL=Backup-NSFW.js.map