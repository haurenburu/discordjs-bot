exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.reply('Nothing playing...');
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.reply('You aren\'t connected in the same voice channel');

    if (fetched.dispatcher.paused) return message.reply('Already paused!');
    fetched.dispatcher.pause();

    message.channel.send('Paused!');
}