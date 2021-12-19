"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const Picture_1 = __importDefault(require("../../Schema/Picture"));
exports.command = {
    name: 'insert',
    description: 'Insert uploaded image to database',
    aliases: ['insert-db', 'db-write'],
    usage: '[url]',
    testOnly: false,
    permissions: [],
    run: async (client, message, args) => {
        if (message.author.id !== process.env.OWNERID)
            return;
        const imgUrl = message.attachments.size > 0
            ? message.attachments.map((attachments) => attachments.url)
            : args.join(' ');
        if (!imgUrl)
            return message.reply({
                content: `This command need 1 argument! Got 0 from 1.`,
            });
        Picture_1.default.findOne({ Channel: message.channel.id }, (err, data) => {
            if (data) {
                data.Url = imgUrl;
                data.save();
            }
            else {
                new Picture_1.default({
                    Url: imgUrl,
                    Channel: message.channel.id,
                }).save();
            }
            if (err)
                return console.log(err);
            message.channel.send(`Sucess!`);
        });
    },
};
//# sourceMappingURL=Insert-to-DB.js.map