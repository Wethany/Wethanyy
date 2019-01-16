const Discord= require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("In 123.943 Servers", {type: "PLAYING"});
});

bot.login(config.token);