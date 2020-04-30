const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                // !rank-streamer

                    var botEmbed = new discord.MessageEmbed()
                    .setTitle("**__[🎦] Streamer__**")
                    .setColor("#504fb6")
                    .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/239/cinema_1f3a6.png`)
                    .setDescription("Beschrijving")
                    .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
            }



module.exports.help = {
    name: "rank-streamer"
}