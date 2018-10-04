const ytdl = require('ytdl-core');

exports.run = async (bot, message, args, ops) => {
    if (!message.member.voiceChannel) return message.reply('you have to be connected on a voice channel!');
    if (message.guild.me.voiceChannel) return message.reply('Bot is already connected to the guild.');
    if (!args[0]) return message.reply('Especify a music url mate');
    let validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.reply('Invalid music URL');
    let info = await ytdl.getInfo(args[0]);
    let connection = await message.member.voiceChannel.join();
    let dispatch = await connection.playStream(ytdl(args[0], { filter: 'audioonly' })); 
    message.channel.send(`Now playing: ${info.title}`);
}
