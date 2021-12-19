"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const fs_1 = require("fs");
const mongoose_1 = __importDefault(require("mongoose"));
const consola_1 = __importDefault(require("consola"));
const dotenv_1 = __importDefault(require("dotenv"));
const chalk_1 = __importDefault(require("chalk"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
class Bot extends discord_js_1.Client {
    commands = new discord_js_1.Collection();
    slash = new discord_js_1.Collection();
    events = new discord_js_1.Collection();
    config = process.env;
    aliases = new discord_js_1.Collection();
    console = consola_1.default;
    constructor() {
        super({
            intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_WEBHOOKS', 'GUILD_MEMBERS'],
            partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'USER'],
        });
    }
    async init() {
        this.login(this.config.TOKEN);
        if (this.config.MONGOURI) {
            mongoose_1.default
                .connect(this.config.MONGOURI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                autoIndex: false,
                connectTimeoutMS: 30000,
            })
                .then(() => {
                this.console.success(`${chalk_1.default.bold.green('[DATABASE]')} Connected`);
            });
        }
        else {
            this.console.info(`You don't have mongoURI`);
        }
        if (!this.config.TESTSERVER)
            this.console.info(`You haven't set the server id`);
        // Commands
        const commandPath = path_1.default.join(__dirname, '..', 'Commands');
        (0, fs_1.readdirSync)(commandPath).forEach((dir) => {
            const commands = (0, fs_1.readdirSync)(`${commandPath}/${dir}`).filter((file) => file.endsWith('.ts'));
            commands.forEach((file) => {
                const { command } = require(`${commandPath}/${dir}/${file}`);
                this.commands.set(command.name, command);
                if (command?.aliases && command?.aliases.length !== 0) {
                    command.aliases.forEach((alias) => {
                        this.aliases.set(alias, command);
                    });
                }
            });
        });
        // Event
        const eventPath = path_1.default.join(__dirname, '..', 'Events');
        (0, fs_1.readdirSync)(eventPath).forEach(async (file) => {
            const { event } = await Promise.resolve().then(() => __importStar(require(`${eventPath}/${file}`)));
            this.events.set(event.name, event);
            this.on(event.name, event.run.bind(null, this));
        });
        // SlashCommand
        const arrayOfSlashCommands = [];
        const arrayOfSlashPrivate = [];
        const slashPath = path_1.default.join(__dirname, '..', 'Slash');
        (0, fs_1.readdirSync)(slashPath).forEach((dir) => {
            const slash = (0, fs_1.readdirSync)(`${slashPath}/${dir}`).filter((file) => file.endsWith('.ts'));
            slash.forEach((file) => {
                const { slash } = require(`${slashPath}/${dir}/${file}`);
                if (slash?.testOnly) {
                    this.slash.set(slash.name, slash);
                    return arrayOfSlashPrivate.push(slash);
                }
                this.slash.set(slash.name, slash);
                arrayOfSlashCommands.push(slash);
            });
        });
        this.on('ready', async () => {
            await this.guilds.cache
                .get(this.config.TESTSERVER)
                .commands.set(arrayOfSlashPrivate);
            await this.application.commands.set(arrayOfSlashCommands);
        });
    }
}
exports.default = Bot;
//# sourceMappingURL=index.js.map