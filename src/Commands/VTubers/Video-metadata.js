"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const color_thief_node_1 = require("color-thief-node");
const discord_js_1 = require("discord.js");
const Holodex_1 = __importDefault(require("../../Exports/Holodex"));
const moment_1 = __importDefault(require("moment"));
exports.command = {
    name: 'videoinfo',
    description: 'Get Video Metadata by Video ID',
    aliases: ['vidinfo'],
    usage: '<videoId: string>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const videoId = args.join(' ');
        if (!videoId)
            return message.reply({ content: 'Please specify video id!' });
        Holodex_1.default
            .getVideo('kKTb4lpGFys')
            .then((vid) => {
            const youtubeLink = `https://youtu.be/${vid.videoId}`;
            (async () => {
                const accentColor = await (0, color_thief_node_1.getColorFromURL)(vid.channel.bannerUrl);
                const embed = new discord_js_1.MessageEmbed()
                    .setTitle(`${vid.title}`)
                    .setURL(`${youtubeLink}`)
                    .setThumbnail(`${vid.channel.avatarUrl}`)
                    .setColor(accentColor)
                    .setDescription(`Type : ${vid.videoType.toUpperCase()}\nTopic : ${vid.topic.toUpperCase()}\nStart / Uploaded at : ${(0, moment_1.default)(vid.actualStart).format('llll')}\nEnded at : ${(0, moment_1.default)(vid.actualEnd).format('llll')}`);
                message.channel.send({ embeds: [embed] });
                console.log(embed);
            })();
        })
            .catch((err) => console.log(err));
    },
};
//# sourceMappingURL=Video-metadata.js.map