const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                // !suggestie-info

                    var botEmbed = new discord.MessageEmbed()
                            .setTitle("Suggestie info")
                            .setColor("#29e53f")
                            .setThumbnail(`https://media.discordapp.net/attachments/703216006121652244/704987653975703644/RaceTopia_Network.png`)
                            .setDescription("Iedereen kan een suggestie doen! Staff dus ook! met !suggest kan je iets aangeven wat je graag wil veranderen! dus als bijvoorbeeld: Je wilt een nieuwe emote in de discord. (je kan van alles insturen!) \n\n Je kan stemmen met een :white_check_mark: als je het een goed idee vind! \n\n Wil je dit liever niet in de server dan moet je stemmen met een :negative_squared_cross_mark: \n\n we kunnen niet beloven dat het in de server komt maar we zullen er altijd kijken naar de mogelijkheden!")
                            .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
            }




module.exports.help = {
    name: "suggestie-info"
}