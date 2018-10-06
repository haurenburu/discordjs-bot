// export the command for the bot
exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating Icon..."); // send a message while bot download the image
    if(!message.guild.iconURL) return msg.edit("No icon"); // check if the guild has or not a icon if not edit the message and says that guild has no icon lol
    await message.channel.send({files: [
        {
            attachment: message.guild.iconURL, // icon image url
            name: "icon.png" // name of image sended
        }
    ]});
     // delete the "generating icon" message.
    msg.delete();
}
exports.help = {
    name: 'icon',
    desc: 'show the guild icon',
    usage: '?icon'
}