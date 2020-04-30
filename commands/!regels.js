const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

                 // !regels

                    var icon = message.guild.iconURL;
                    var serverEmbed = new discord.MessageEmbed()
                            .setTitle("Regels!")
                            .setThumbnail(`https://www.managementimpact.nl/content/uploads/2017/08/Regels-272x181.jpg`)
                            .setImage('https://lh3.googleusercontent.com/proxy/RmFRXaOjwf7zjkifKR65UGTkRHBlGBr_PsQ_WQCvC1IEEPDy1EFESCYHPjNZJLPlyObMAgw-B1Wmff3SqswZUtsYivmOkIbTtJCHJS5fgtvdRRuyZG08PHTlINRdaBIlzSlC8-Ue-n9hntzlO9ALCouzmBrRQlDmaT-L68nESg')
                            .setColor("#ff0000")
                            .setDescription("Regels lees dit goed door @everyone")
                            .addField("**__📕| Reclame__**", "Reclame maken doormiddel van het sturen van een link is niet toegestaan. Wel mogen Partners reclame maken. Ook een DM sturen naar leden met reclame is verboden. Hiervoor wordt je verbannen.")
                            .addField("**__💬| Chatten__**", "Hou het gezellig voor iedereen. Ga dus niet onnodig staan spammen, of onnodig staan mentionen.")
                            .addField("**__🙏| Respect__**", "Toon respect naar andere leden en staff. Gewoon normaal doen zoals het hoort.")
                            .addField("**__🔞| 18+ content__**", "18+ content (NSFW content) sturen is in de gehele discord verboden.")
                            .addField("**__👮‍♂️| Voordoen als staff__**", "Jezelf voordoen als stafflid is verboden! Je mag natuurlijk wel andere leden helpen met problemen.")
                            .addField("**__🚫| Bedreigen__**", "Mensen bedreigen in deze discord server is ten strengste verboden! Ook schelden is verboden.", "test")
                            .addField("**__:raised_hand:|Verboden__**", "- Het is verboden om: 18+ (NSFW) content te sturen \n - Alle vormen van scamming, Screamers/earrapes op Youtube \n - in MP3 vorm of andere vormen \n - Haatdragende en/of racistische reclame te sturen \n - Alle soorten alts verkopen of weggeven of discords die beloven dat je geld/licenties/giftcards kunt krijgen voor iets [Rewards] \n - Alle discords die zich bezig houden met hacken of griefen \n - Alle reclameberichten met linkshortners (zoals adf.ly, of goo.gl) \n - Berichten met virussen te sturen \n - Berichten met advertenties te sturen (naar bijv. Marktplaats) \n - ✈Als je hier iets stuurt zoals nummer wordt de Privacy wet genergeert daarbij verbannen we u.")
                            .setFooter('Gemaakt door: Dani van Bussel', 'https://lh3.googleusercontent.com/-JubvaieWRSc/XoeJgjnRh8I/AAAAAAAAF_E/0zQNDI2_1AEYjdrYXBegO_IAcd_G-LE2QCEwYBhgL/w140-h139-p/20180712_091048.jpg');
    
                    return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "regels"
}