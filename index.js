require("dotenv").config();

const { Client, GatewayIntentBits, Collection } = require("discord.js");
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ]
});

client.commands = new Collection();

const HandleLoader = require("./src/Handler/HandleLoader");
HandleLoader(client);

//Login
client.login(process.env.TOKEN);