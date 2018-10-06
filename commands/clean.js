// exports the command to bot
exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You don\'t have permission to do that!'); // check if author has permission to reload the scripts
    async function clear() {
        message.delete(); // delete the command message itself
        const fetched = await message.channel.fetchMessages({limit: 99}); // get last 99 messages from the channel
        message.channel.bulkDelete(fetched); // delete the last messages from fetched
    }
    clear(); // call the async function to delete messages
}
exports.help = {
    name: 'clean',
    desc: 'clear the last 99 messages from this channel',
    usage: '?clean'
}