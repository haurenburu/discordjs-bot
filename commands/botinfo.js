const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
        
    let botEmbed = new Discord.RichEmbed()
        .setDescription('Bot Information')
        .setColor('#bceaff')
        .addField('Bot Name', bot.user.username)
        .setThumbnail(botIcon)
        .addField("Created on", bot.user.createdAt);
    return message.channel.send(botEmbed);
}