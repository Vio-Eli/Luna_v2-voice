const fs      = require("fs");
const path    = require("path");
const settings = require("./settings.json");

const beglis = require("./actions/start.js");
const {Client, Intents} = require("discord.js");
const Discord = require("discord.js");


const client = new Client({ 
    intents: [Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGES]
});

client.login(settings.Token); //TODO: update config

client.once("ready", () => {
    console.log("voice counterpart is ready");  
});

beglis.test("what");

