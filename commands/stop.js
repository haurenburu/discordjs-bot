//exports the command to the bot
exports.run = (bot, message, args, ops) => {
    if (!message.member.voiceChannel) return message.reply('You have to be connected on a voice channel!'); // check if user is connected in the voice channel
    if (!message.guild.me.voiceChannel) return message.reply('I\'m not connected to the guild'); // check if bot is connected to the guild ( usually playing something)
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.reply('You aren\'t connected in the same voice channel'); // check if author is connected to the same channel as the bot
    message.channel.send({embed: { color: 0x3b88c3, description: ":stop_button: Stopped" }}) // send a return to the user;
    let data = ops.active.get(message.guild.id)
    message.guild.me.voiceChannel.leave(); // just "kick" the bot from voice channel
    data.queue.length = 0;
}
exports.help = {
    name: 'Stop',
    desc: 'leave the channel if bot is singing',
    usage: '?stop'
}