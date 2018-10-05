const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setDescription("This is the user's info")
        .setThumbnail(message.author.avatarURL)
        .setColor("#3b88c3")
        .addField("Full username", `${message.author.username}#${message.author.discriminator}`)
        .addField("ID", message.author.id)
        .addField("Created At", message.author.createdAt);
    message.channel.send(embed);
}