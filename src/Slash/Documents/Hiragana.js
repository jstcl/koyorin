"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash = void 0;
const discord_js_1 = require("discord.js");
const Hiragana_json_1 = __importDefault(require("../../Data/Hiragana.json"));
exports.slash = {
    name: 'hiragana',
    description: 'Learn hiragana characters',
    testOnly: false,
    options: [],
    run: async (client, interaction, args) => {
        let data = Hiragana_json_1.default[Math.floor(Math.random() * 105)];
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`${data.kana} - ${data.romaji}`)
            .addField(`Kana`, `${data.kana}`, true)
            .addField(`Romaji`, `${data.romaji}`, true)
            .addField(`Type`, `${data.type}`, true)
            .setColor('LUMINOUS_VIVID_PINK')
            .setTimestamp();
        interaction.followUp({ embeds: [embed] });
    },
};
//# sourceMappingURL=Hiragana.js.map