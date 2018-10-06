const ytlist = require('youtube-playlist');
const Discord = require('discord.js');
// /watch?v=Mj9uFawP28k
exports.run = async (bot, message, args, ops) => {
    // console.log (ytlist(args[0], 'id').then(res => console.log(res.data.playlist)));
    ytlist(args[0], 'id').then( res => {
        for(i in res.data.playlist){
            let commandFile = require('./play');
            commandFile.run(bot, message, [`/watch?v=${res.data.playlist[i]}`], ops);
            // console.log([`/watch?v=${res.data.playlist[0]}`]);
        }
    });    
}
exports.help = {
    name: 'l'
}