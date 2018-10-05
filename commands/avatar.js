// exports the command to bot
exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating avatar..."); // send a message while bot download the image
    let target = message.mentions.users.first() || message.author; // check if author of message wants someone's avatar if not, send author's avatar
    // send the image
    await message.channel.send({files: [
        {
            attachment: target.displayAvatarURL, // avatar image url
            name: "avatar.png" // name of image sended
        }
    ]});
    // delete the "generating avatar" message.
    msg.delete();
}