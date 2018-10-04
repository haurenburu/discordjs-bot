exports.run = (bot, message, args, ops) => {
    if (!message.member.voiceChannel) return message.reply('You have to be connected on a voice channel!');
    if (!message.guild.me.voiceChannel) return message.reply('I\'m not connected to the guild');
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.reply('You aren\'t connected in the same voice channel');

    message.guild.me.voiceChannel.leave();
    message.reply('bye!');
}