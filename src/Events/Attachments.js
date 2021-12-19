"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
const discord_js_1 = require("discord.js");
const Picture_1 = __importDefault(require("../Schema/Picture"));
const originChannel = process.env.UPLOAD_CHANNEL;
exports.event = {
    name: 'messageCreate',
    run: async (client, message) => {
        const debugChannel = client.channels.cache.find((channel) => channel.id === '899997057849393225');
        if (originChannel.includes(message.channel.id)) {
            if (message.author.bot)
                return;
            const imgUrl = message.attachments.size > 0
                ? message.attachments.map((att) => att.url)
                : message.content;
            const fixedImg = imgUrl[0];
            try {
                Picture_1.default.findOne({ Url: fixedImg }, async (err, data) => {
                    if (data) {
                        data.Url = fixedImg;
                        data.Channel = message.channel.id;
                        data.save();
                    }
                    else {
                        new Picture_1.default({
                            Url: fixedImg,
                            Channel: message.channel.id,
                        }).save();
                    }
                    const embed = new discord_js_1.MessageEmbed()
                        .setTitle(`:white_check_mark: Successfully uploaded one message to database!`)
                        .setURL(fixedImg)
                        .setImage(fixedImg)
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
//# sourceMappingURL=Attachments.js.map