exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id); // get the queue from bot
    if (!fetched) return message.reply('Nothing playing...'); // check if is something playing 
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.reply('You aren\'t connected in the same voice channel'); // check if user is connected to the same voice channel as bot
    if (fetched.dispatcher.paused) return message.reply('Already paused!'); // check if music is already paused
    fetched.dispatcher.pause(); // pause the music itself
    // message.channel.send('Paused!'); 
    message.channel.send({embed: { color: 0x3b88c3, description: "Paused" }}); // send a return to the user saying that " music is paused1"
}
exports.help = {
    name: 'pause',
    desc: 'pause the music if bot if singing',
    usage: '?pause'
}