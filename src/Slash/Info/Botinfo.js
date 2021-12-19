"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.slash = void 0;
const package_json_1 = __importDefault(require("../../../package.json"));
const discord_js_1 = require("discord.js");
const moment_1 = __importDefault(require("moment"));
exports.slash = {
    name: 'botinfo',
    description: 'Show bot information',
    testOnly: false,
    options: [],
    run: async (client, interaction, args) => {
        const embed = new discord_js_1.MessageEmbed()
            .setTitle('Bot Information')
            .setThumbnail(interaction.client.user.displayAvatarURL({ size: 512 }))
            .addField('General Information', `Name : ${client.user.username}\nMain Prefix : \`${process.env.PREFIX}\`\nCreated at : ${(0, moment_1.default)(client.user.createdAt).format('llll')}\nRepository : https://github.com/gifaldyazkaa/koyori-dscbot\nDocumentation : https://gifaldyazka.is-a.dev/koyori-dscbot/`)
            .addField('Core Information', `Project-type : Node.js Application\nProject version : v${package_json_1.default.version}\nDiscord.js version : ^${package_json_1.default.dependencies['discord.js']}\nMongoose version : ^${package_json_1.default.dependencies.mongoose}\nTypeScript version : ${package_json_1.default.dependencies.typescript}`)
            .setColor('LUMINOUS_VIVID_PINK')
            .setTimestamp();
        interaction.followUp({ embeds: [embed] });
    },
};
//# sourceMappingURL=Botinfo.js.map