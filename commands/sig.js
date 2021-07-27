// exports the command to bot
exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send({embed:{ color: 0x3b88c3, description: 'Please specify the nickname' }})
    let msg = await message.channel.send("Generating avatar..."); // send a message while bot download the image
    // let target = args[0]; // check if author of message wants someone's avatar if not, send author's avatar
    let target = args.join('_')
    let indexToSplit = target.indexOf('(');
    let t1 = target.slice(0, indexToSplit);
    let argsSig = target.slice(indexToSplit + 1);
    argsSig = argsSig.substring(0, argsSig.length -1);
    let char;
    target.includes('(') ? char = t1.substring(0, t1.length - 1)+'/'+ argsSig : char = target+'/1/0';
    await message.channel.send({files: [
        {
            attachment: `https://www.novaragnarok.com/ROChargenPHP/newsig/${char}`, // avatar image url
            name: "sig.png" // name of image sended
        }
    ]});
    // delete the "generating avatar" message.
    msg.delete();
}
exports.help = {
    name: 'sig',
    desc: 'show user specified novaRO character',
    usage: '?sig hauren | ?sig hauren (3/5)'
}
