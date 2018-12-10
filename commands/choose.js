exports.run = async (bot, message, args) => {
    let things = args[0].split('|');
    message.channel.send(things[Math.floor(Math.random() * things.length)])
}
exports.help = {
    name: 'choose',
    desc: 'choose between options',
    usage: '!choose op1|op2'
}