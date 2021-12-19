"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const discord_js_1 = require("discord.js");
const Hiragana_json_1 = __importDefault(require("../../Data/Hiragana.json"));
exports.command = {
    name: 'hiragana',
    description: 'Learn Hiragana characters',
    aliases: ['hira'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const errEmbed = new discord_js_1.MessageEmbed()
            .setTitle(':x: | No permission!')
            .setDescription('You must have <@&902440072148836383> to use this command!')
            .setColor('RED')
            .setTimestamp();
        if (!message.member.roles.cache.find((r) => r.id === '902440072148836383'))
            return message.channel.send({ embeds: [errEmbed] });
        let data = Hiragana_json_1.default[Math.floor(Math.random() * 105)];
        const embed = new discord_js_1.MessageEmbed()
            .setTitle(`${data.kana} - ${data.romaji}`)
            .addField(`Kana`, `${data.kana}`, true)
            .addField(`Romaji`, `${data.romaji}`, true)
            .addField(`Type`, `${data.type}`, true)
            .setColor('LUMINOUS_VIVID_PINK')
            .setTimestamp();
        message.channel.send({ embeds: [embed] });
    },
};
//# sourceMappingURL=Hiragana.js.map