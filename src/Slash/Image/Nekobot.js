"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.slash = {
    name: 'nekobot',
    description: 'Get an images from nekobot.xyz',
    testOnly: false,
    options: [
        {
            type: 3,
            name: 'endpoint',
            description: 'Type that you want. Leave it blank for random type.',
            required: false,
        },
    ],
    run: async (client, interaction, args) => {
        if (interaction.channel.type === 'GUILD_TEXT' && !interaction.channel.nsfw)
            return interaction.followUp({
                content: `Not an NSFW Channel!`,
                ephemeral: true,
            });
        let [endpoint] = args;
        if (!endpoint)
            endpoint = 'lewd';
        (0, node_fetch_1.default)(`https://nekobot.xyz/api/image?type=${endpoint}`)
            .then((res) => res.json())
            .then((body) => {
            interaction.followUp({ content: `${body.message}` });
        })
            .catch((err) => {
            console.log(err);
        });
    },
};
//# sourceMappingURL=Nekobot.js.map