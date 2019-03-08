exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) return message.reply('Nothing playing...');
    if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.reply('You aren\'t connected in the same voice channel');
    let userCount = message.member.voiceChannel.members.size;
    let required = 0; //Math.ceil(userCount/2);
    if (!fetched.queue[0].voteSkips) fetched.queue[0].voteSkips = [];
    if (fetched.queue[0].voteSkips.includes(message.member.id)) return message.channel.send(`you already voted! ${fetched.queue[0].voteSkips.length}/${required} required.`);
    fetched.queue[0].voteSkips.push(message.member.id);
    ops.active.set(message.guild.id, fetched);

    if(fetched.queue[0].voteSkips.length >= required){
        message.channel.send({embed: { color: 0x3b88c3, description: 'Skipped!'}});
        message.delete();
        return fetched.dispatcher.emit('end');
    }
    message.channel.send(`Successfully voted to skip ${fetched.queue[0].voteSkips.length}/${require} required.`);

}
exports.help = {
    name: 'skip',
    desc: 'skip the current music then plays the next one',
    usage: 'skip'
}