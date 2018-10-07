exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id); // get the queue from bot
    if (!fetched) return message.channel.send({embed: { color: 0x3b88c3, description: "Resumed" }});//message.reply('Nothing playing...'); // 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.reply('You aren\'t connected in the same voice channel');

    if (!fetched.dispatcher.paused) return message.reply('Music isn\'t paused!');
    fetched.dispatcher.resume();

    message.channel.send({embed: { color: 0x3b88c3, description: ":arrow_forward: Resumed" }});
}
exports.help = {
    name: 'resume',
    desc: 'unpause the music',
    usage: '?resume'
}