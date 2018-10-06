const search = require('yt-search');
exports.run = async (bot, message, args, ops) =>{
    const emojis = [':one:', ':two:', ':three:', ':four:',':five:', ':six:', ':seven:', ':eight: ', ':nine:', ':keycap_ten:']
    
    if (!message.member.voiceChannel) return message.reply('you have to be connected on a voice channel!');
    search(args.join(' '), function (err, res) {
        if (err) return message.reply('something went wrong');
        let videos = res.videos.slice(0, 10);
        let resp = '';
        for (var i in videos){

            // resp += `**[${parseInt(i)+1}]**: ${videos[i].title}\n`;
            resp += `${emojis[i]}: ${videos[i].title}\n\n`;
        }
        resp += `\nChoose a number \`1-${videos.length}\``;
        var x = message.channel.send({embed: { color: 0x3b88c3, description: resp}} );
        const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
        const collector = message.channel.createMessageCollector(filter);
        collector.videos = videos;
        
        collector.once('collect', function(m) {
            x.then(sentMessage => sentMessage.delete()); // delete the music list menu
            m.delete();
            let commandFile = require('./play');
            commandFile.run(bot, message, [this.videos[parseInt(m.content)-1].url], ops);
            console.log(typeof [this.videos[parseInt(m.content)-1].url] +':'+ [this.videos[parseInt(m.content)-1].url]);
        })
    });
}
exports.help = {
    name: 'search',
    desc: 'searchs on youtube for songs then plays (deprecated use ?play instead)',
    usage: '?search moonlight - xxxtentacion'
}