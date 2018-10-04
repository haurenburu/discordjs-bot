exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.reply('Nothing playing...');
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.reply('You aren\'t connected in the same voice channel');
    if (isNaN(args[0]) || args[0] > 200 || args[0] < 0) return message.reply('Invalid valor (0-200)');
    fetched.dispatcher.setVolume(args[0]/100);

    message.channel.send(`Volume: ${args[0]}/200`)
}