require("dotenv").config();

const { REST, Routes } = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = (client) => {
    const commandsPath = path.join(__dirname, './../Commands'); // index.js からの相対パスに注意
    const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'));
    const commands = commandFiles.map(f => require(path.join(commandsPath, f)).data);

    new REST({ version: '10' })
        .setToken(process.env.TOKEN)
        .put(Routes.applicationCommands(process.env.CLIENT), { body: commands })
        .then(() => console.log("Command registration Success"))
        .catch(console.error);
};