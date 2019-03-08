// import discord js cuz we are using discord embeds
const Discord = require('discord.js');
// exports the command to bot
exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL; // get the bot profile image
    let botEmbed = new Discord.RichEmbed() // create new embed  
        .setDescription('Bot Information') // this is a description of embed
        .setColor('#3b88c3') // color for left bar
        .addField('Bot Name', bot.user.username) // name and content
        .setThumbnail(botIcon) // here is the image from "boticon"
        .addField("Created on", bot.user.createdAt); // get a time when the bot has created
    return message.channel.send(botEmbed); // send the message with a embed
}
exports.help = {
    name: 'botinfo',
    desc: 'Show the bot info kek',
    usage: '?botinfo'
}