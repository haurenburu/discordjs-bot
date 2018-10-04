exports.run = async (bot, message, args, ops) => {
    if(message.author.id !== ops.owner) return message.channel.send('you are not the owner!');
    try{
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch(e) {
        message.reply(`Unable to reload: ${args[0]}`)
    }
    message.reply(`Successfully reloaded: ${args[0]}`)
     
}