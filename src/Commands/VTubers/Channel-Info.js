"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const color_thief_node_1 = require("color-thief-node");
const Holodex_1 = __importDefault(require("../../Exports/Holodex"));
const discord_js_1 = require("discord.js");
const numberWithCommas = (int) => {
    // ong, regex :/
    return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
exports.command = {
    name: 'channelinfo',
    description: 'Get VTubers Channel Info',
    aliases: ['chinfo'],
    usage: '<channelId: string>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const channelId = args.join(' ');
        if (!channelId)
            return message.reply({ content: 'Please specify channel id!' });
        Holodex_1.default
            .getChannel(`${channelId}`)
            .then((ch) => {
            (async () => {
                const accentColor = await (0, color_thief_node_1.getColorFromURL)(ch.bannerUrl);
                const embed = new discord_js_1.MessageEmbed()
                    .setTitle(`${ch.name}`)
                    .setThumbnail(`${ch.avatarUrl}`)
                    .setImage(`${ch.bannerUrl}`)
                    .setColor(accentColor)
                    .setDescription(`Channel Name : ${ch.name}\nEnglish Name : ${ch.englishName}\nAffilation : ${ch.organization}\nSubscribers : ${numberWithCommas(ch.subscriberCount)}\nTotal videos : ${ch.videoCount} videos\nTotal views : ${numberWithCommas(ch.viewCount)}\nTwitter : [@${ch.twitterName}](https://twitter.com/${ch.twitterName})`);
                message.channel.send({ embeds: [embed] });
            })();
        })
            .catch((err) => console.log(err));
    },
};
//# sourceMappingURL=Channel-Info.js.map