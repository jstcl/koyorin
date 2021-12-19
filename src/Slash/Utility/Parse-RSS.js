"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash = void 0;
const discord_js_1 = require("discord.js");
const rss_parser_1 = __importDefault(require("rss-parser"));
const parser = new rss_parser_1.default();
exports.slash = {
    name: 'rss',
    description: 'Parse RSS (XML) into Read-able Text',
    testOnly: false,
    options: [
        {
            type: 3,
            name: 'rss_url',
            description: 'Valid RSS / XML URL',
            required: true,
        },
    ],
    run: async (client, interaction, args) => {
        const [rss_url] = args;
        parser
            .parseURL(rss_url)
            .then((feeds) => {
            const feed1 = feeds.items[0];
            const embed = new discord_js_1.MessageEmbed()
                .setTitle(`${feeds.title}`)
                .setURL(feed1.link)
                .setDescription(`${feed1.contentSnippet}`)
                .setColor('ORANGE');
            interaction.followUp({ embeds: [embed] });
        })
            .catch((err) => {
            console.log(err);
        });
    },
};
//# sourceMappingURL=Parse-RSS.js.map