exports.run = async (bot, message, args, ops) => {
    if (message.member.voiceChannel) {
        const connection = await message.member.voiceChannel.join();
        // const dispatcher = connection.playStream('https://d1u5p3l4wpay3k.cloudfront.net/dota2_gamepedia/e/e0/Bane_respawn_07.mp3');
        const dispatcher = connection.playStream('https://www.detrouse.com/mumba.mp3')
        
        dispatcher.on('end', () => {
            console.log('Finished playing!');
            dispatcher.destroy();
            message.guild.me.voiceChannel.leave()
        });
    }
    
}
