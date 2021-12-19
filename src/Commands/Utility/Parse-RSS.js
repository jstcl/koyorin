"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
const rss_parser_1 = __importDefault(require("rss-parser"));
const parser = new rss_parser_1.default();
exports.command = {
    name: 'parse-rss',
    description: 'Parse RSS (XML) into Read-able Text',
    aliases: ['rss-parse'],
    usage: '<xml_url>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const rss_url = args.join(' ');
        if (!rss_url)
            return message.reply({ content: 'Please specify RSS URL to parse!' });
        parser
            .parseURL(rss_url)
            .then((feeds) => {
            const feed1 = feeds.items[0];
            const embed = new discord_js_1.MessageEmbed()
                .setTitle(`${feeds.title}`)
                .setURL(feed1.link)
                .setDescription(`${feed1.contentSnippet}`)
                .setColor('ORANGE');
            message.channel.send({ embeds: [embed] });
        })
            .catch((err) => {
            console.log(err);
        });
    },
};
//# sourceMappingURL=Parse-RSS.js.map