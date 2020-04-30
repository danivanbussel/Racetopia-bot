const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const fs = require("fs");

const bot = new discord.Client();
bot.command = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

        if (err) console.log(err);
        var jsFiles = files.filter(f => f.split(".").pop() === "js");
        if (jsFiles.length <= 0) {
                console.log("Geen files beschikbaar");
                return;
        }

        jsFiles.forEach((f, i) => {

                var fileGet = require(`./commands/${f}`);
                console.log(`De File ${f} is geladen`);

                bot.command.set(fileGet.help.name, fileGet);
        })



















});;

















bot.login(process.env.token);