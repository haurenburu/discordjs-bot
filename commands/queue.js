const Discord = require('discord.js');
exports.run = async (bot, message, args, ops) => {
    let fetched = ops.active.get(message.guild.id);
    if(!fetched) return message.reply('Nothing playing...');
    var queue = fetched.queue;
    let queueEmpty = queue[1] ? 'Queue:\n' : ' ';
    let nowPlaying = queue[0];

    // let resp = `Now Playing:\n${nowPlaying.songTitle} Requested by: <@${nowPlaying.requester}>\n\n${queueEmpty}`;
    let resp = ' ';
    for(let i = 1; i < queue.length; i++){
        resp += `${queue[i].songTitle} Requested by: ${queue[i].requester}\n`;
    }

    let playEmbed = new Discord.RichEmbed() // create new embed
        .setColor('#3b88c3') // left bar color for embed
        .addField('Now Playing',`-\n${nowPlaying.songTitle} Requested by: ${nowPlaying.requester}`)
    
    let queueEmbed = new Discord.RichEmbed() // create new embed
    .setColor('#3b88c3') // left bar color for embed
    .addField('Queue', '-\n'+ resp);

    
    message.channel.send(playEmbed);
    if(resp !== ' ') message.channel.send(queueEmbed);

}
exports.help = {
    name: 'queue',
    desc: 'show the user a current song queue',
    usage: '?queue'
}