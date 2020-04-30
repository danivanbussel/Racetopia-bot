const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                // !ticketinfo

                    var botEmbed = new discord.MessageEmbed()
                            .setTitle("**__Ticketinfo__**")
                            .setColor("#50a688")
                            .setThumbnail(`https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/241/ticket_1f3ab.png`)
                            .setDescription("Klik op :tickets: om een Ticket aan te maken. \n\n hier kan je: \n Ranks kopen/aanvragen \n Vragen stellen \n En nog veel meer!")
                            .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(botEmbed);
            }



module.exports.help = {
    name: "ticketinfo"
}