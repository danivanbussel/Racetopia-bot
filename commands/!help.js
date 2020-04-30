const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

        // !help

            var botEmbed = new discord.MessageEmbed()
                    .setTitle("Alle customcommands")
                    .setColor("#29e53f")
                    .setThumbnail(`https://media.discordapp.net/attachments/703216006121652244/704987653975703644/RaceTopia_Network.png`)
                    .setDescription("``!help`` - Voor alle command's \n ``!idee <idee>`` - Om je iedeen te delen voor de server \n ``!ip`` - Voor alle MCServer informatie \n ``!rank`` - Voor alle Rank informatie \n ``!regels`` - Om alle regels nog eventjes door te lezen")
                    .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');

            return message.channel.send(botEmbed);
    }



module.exports.help = { 
    name: "help"
}