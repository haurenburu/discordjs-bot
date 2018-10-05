exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating Icon...");

    if(!message.guild.iconURL) return msg.edit("No icon");
    await message.channel.send({files: [
        {
            attachment: message.guild.iconURL,
            name: "icon.png"
        }
    ]});
    msg.delete();
}