const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let guildIcon = message.guild.iconURL;
    let serverEmbed = new Discord.RichEmbed()
        .setDescription('Server information')
        .setColor('#bceaff')
        .setThumbnail(guildIcon)
        .addField('Server Name', message.guild.name)
        .addField('Created on', message.guild.createdAt)
        .addField('You joined on', message.member.joinedAt)
        .addField('Members', message.guild.memberCount);
    return message.channel.send(serverEmbed);
}