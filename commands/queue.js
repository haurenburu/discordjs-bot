exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.reply('Nothing playing...');
    var queue = fetched.queue;
    let queueEmpty = queue[1] ? 'Queue:\n' : ' ';
    let nowPlaying = queue[0];
    let resp = `Now Playing:\n${nowPlaying.songTitle} Requested by: <@${nowPlaying.requester}>\n\n${queueEmpty}`;
    for(let i = 1; i < queue.length; i++){
        resp += `${queue[i].songTitle} Requested by: <@${queue[i].requester}>\n`;
    }
    
    message.channel.send(resp);

}