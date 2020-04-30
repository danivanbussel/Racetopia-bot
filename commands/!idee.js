const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



    var idee = args.join(' ');
    if(!idee) return message.channel.send("Je bent je idee vergeten te sturen!");
    var ideeEmbed = new discord.MessageEmbed()
    .setTitle("nieuw idee")
    .setColor("#00FF00")
    .addField("idee", idee)
    .addField("ingezonden door", message.author);

    var ideeChannel = message.guild.channels.cache.find(c => c.name == "idee"); 
    if(!ideeChannel) return message.channel.send("kanaal niet gevonden!")

    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');

    });






}

module.exports.help = {
    name: "idee",
    description: "Heb je een iedee voor de server of discord? Zet het dan in dit bericht! wij zullen er naar kijken!"
}