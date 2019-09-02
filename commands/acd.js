exports.run = async(bot, message, args) => {
    let aspd = args[0];
    let cast = args[1];
    let aps = 50/(200-aspd);
    let redu;
    let cps;

    if(args[0] == null){
        message.channel.send("Usage: !acd [atkspeed] [castdelay]");
    }
    for(let i = 0; i <= 100; i++){
        redu = i;
        cps = cast - cast * (redu/100);
        if((1/aps)-cps >= 0) {
            message.channel.send("You need at least: " + i+"%");
            break;
        }
    }
}
exports.help = {
    name: 'acd',
    desc: '',
    usage: 'acd 193 3'
}