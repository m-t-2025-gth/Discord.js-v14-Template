module.exports = (client) => {
    const ShashCommandRegister = require("./Register");
    ShashCommandRegister(client);

    const EventLoader = require("./EventLoader");
    EventLoader(client);

    const CommandLoader = require("./CommandLoader");
    CommandLoader(client);
}