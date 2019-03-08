// import discord js cuz we are using embeds
const Discord = require('discord.js');
// exports the command to bot
exports.run = async (bot, message, args) => {
    let guildIcon = message.guild.iconURL; // get the guild icon
    let serverEmbed = new Discord.RichEmbed() // create a new embed
        .setDescription('Server information') // set the description from embed
        .setColor('#3b88c3') // left embed bar color 
        .setThumbnail(guildIcon) // set the image for embed
        .addField('Server Name', message.guild.name) // create new field with soem information
        .addField('Created on', message.guild.createdAt) // create new field with soem information
        .addField('You joined on', message.member.joinedAt) // create new field with soem information
        .addField('Members', message.guild.memberCount); // create new field with soem information
    return message.channel.send(serverEmbed); // send the embed to the discord channel
}
exports.help = {
    name: 'guildinfo',
    desc: 'show the guildinfo lol',
    usage: '?guildinfo'
}