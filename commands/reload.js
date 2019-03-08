exports.run = async (bot, message, args, ops) => {
    if(message.author.id !== ops.owner) return message.reply('You aren\'t the bot owner!');
    if (!args[0]) return message.reply('Especify the command to be reloaded');
    try{
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch(e) {
        return message.reply(`Unable to reload: ${args[0]}`)
    }
    message.reply(`Successfully reloaded: ${args[0]}`)
}
exports.help = {
    name: 'reload',
    desc: 'reloads a specified command (bot owner only)',
    usage: '?reload <play>'
}