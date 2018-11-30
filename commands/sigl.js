// exports the command to bot
exports.run = async (bot, message, args) => {
    if (!args[0]) return message.channel.send({embed:{ color: 0x3b88c3, description: 'Please specify the nickname' }})
    // let target = args[0]; // check if author of message wants someone's avatar if not, send author's avatar
    let target = args.join('_')
    let indexToSplit = target.indexOf('(');
    let t1 = target.slice(0, indexToSplit);
    let argsSig = target.slice(indexToSplit + 1);
    argsSig = argsSig.substring(0, argsSig.length -1);
    let char;
    target.includes('(') ? char = t1.substring(0, t1.length - 1)+'/'+ argsSig : char = target;
    
    await message.channel.send(`https://www.novaragnarok.com/ROChargenPHP/newsig/${char}`);
}
exports.help = {
    name: 'sigl',
    desc: 'show user specified novaRO character with a link',
    usage: '?sigl hauren | ?sigl h u a r e n | ?sigl hauren (3/5)'
}