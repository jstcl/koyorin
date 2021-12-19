"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.event = void 0;
exports.event = {
    name: 'interactionCreate',
    run: async (client, interaction) => {
        if (interaction.isCommand()) {
            await interaction.deferReply({ ephemeral: false }).catch(() => { });
            const cmd = client.slash.get(interaction.commandName);
            if (!cmd)
                return interaction.followUp({ content: `An error has occured` });
            const args = [];
            for (let option of interaction.options.data) {
                if (option.type === 'SUB_COMMAND_GROUP') {
                    if (option.name)
                        args.push(option.name);
                    for (const op of option.options) {
                        if (op.name)
                            args.push(op.name);
                        if (op.value)
                            args.push(op.value);
                        op.options.forEach((x) => {
                            if (x.value)
                                args.push(x.value);
                        });
                    }
                }
                else if (option.type === 'SUB_COMMAND') {
                    if (option.name)
                        args.push(option.name);
                    option.options?.forEach((x) => {
                        if (x.value)
                            args.push(x.value);
                    });
                }
                else if (option.value)
                    args.push(option.value);
            }
            interaction.member = interaction.guild.members.cache.get(interaction.user.id);
            cmd.run(client, interaction, args);
        }
    },
};
//# sourceMappingURL=Interaction.js.map