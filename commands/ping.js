exports.run = async (bot, message, args) => {
    // mbed for ping
    message.channel.send({embed: {
        color: 0x3b88c3,
        description: `Pong! Latency is ${message.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms` // cal the ping end send as an embed
    }});
}
exports.help = {
    name: 'ping',
    desc: 'informes the user the latency bot ~> user ~> bot',
    usage: '?ping'
}