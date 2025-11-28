module.exports = {
    name: 'interactionCreate',
    once: false,
    execute: async (interaction, client) => {
        if (!interaction.isChatInputCommand()) return;
        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'エラーが発生しました', ephemeral: true });
        }
    }
};
