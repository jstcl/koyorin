"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const discord_js_1 = require("discord.js");
const Picture_1 = __importDefault(require("../Schema/Picture"));
const originChannel = process.env.ORIGIN_CHANNEL;
exports.event = {
    name: 'messageCreate',
    run: async (client, message) => {
        const debugChannel = client.channels.cache.find((channel) => channel.id === '899997057849393225');
        if (originChannel.includes(message.channel.id)) {
            if (message.author.bot)
                return;
            const imgUrl = message.content;
            try {
                Picture_1.default.findOne({ Url: imgUrl }, async (err, data) => {
                    if (data) {
                        data.Url = imgUrl;
                        data.Channel = message.channel.id;
                        data.save();
                    }
                    else {
                        new Picture_1.default({
                            Url: imgUrl,
                            Channel: message.channel.id,
                        }).save();
                    }
                    const embed = new discord_js_1.MessageEmbed()
                        .setTitle(`:white_check_mark: Successfully uploaded one message to database!`)
                        .setURL(imgUrl)
                        .setImage(imgUrl)
                        .setColor('FUCHSIA')
                        .setTimestamp();
                    debugChannel.send({ embeds: [embed] });
                    console.log('Saved one message to database!');
                });
            }
            catch (err) {
                debugChannel.send({
                    content: `An error occured!\n\`\`\`yml\n${err}\n\`\`\``,
                });
                console.log(err);
            }
        }
    },
};
//# sourceMappingURL=LinkUpload.js.map