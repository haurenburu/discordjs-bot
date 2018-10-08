exports.run = async (bot, message, args) => {
    Date.prototype.subTime= function(h,m){
        this.setHours(this.getHours()-h);
        this.setMinutes(this.getMinutes()-m);
        return this;
    }
    Date.prototype.addTime= function(h,m){
        this.setHours(this.getHours()+h);
        this.setMinutes(this.getMinutes()+m);
        return this;
    }
    
    let server = new Date().subTime(4, 0);
    let today  = new Date();

    let h  = checkTime(server.getHours());
    let m  = checkTime(today.getMinutes());
    let st = checkTime(today.getHours());
    message.channel.send(":flag_br: "+st+":"+m+":"+s+"\n:flag_ca: "+h+":"+m+":"+s);
    // MONSTER HUNTER HH
    if(h >= 0 && h < 3){
        message.channel.send(`Monster Hunter starts in ${2-h} hours and ${59-m} minutes`)
    }
    
    else if(h >= 3 && h < 9){
        if(h < 4) return message.channel.send(`Monster Hunter is on Happy Hour for more ${60-m} minutes`);
        message.channel.send(`Monster Hunter starts in ${8-h} hours and ${60-m} minutes`)
    }
    else if(h >= 9){
        if(h < 10) return message.channel.send(`Monster Hunter is on Happy Hour for more ${60-m} minutes`);
        message.channel.send(`Monster Hunter starts in ${15-h} hours and ${60-m} minutes`)
    }
    else if(h >= 16){
        if(h < 17) return message.channel.send(`Monster Hunter is on Happy Hour for more ${60-m} minutes`);
        message.channel.send(`Monster Hunter starts in ${20-h} hours and ${60-m} minutes`)
    }
    else if(h >= 21){
        if(h < 22) return message.channel.send(`Monster Hunter is on Happy Hour for more ${60-m} minutes`);
        message.channel.send(`Monster Hunter starts in ${26-h} hours and ${60-m} minutes`)
    }
    
}
exports.help = {
    name: 'time',
    desc: 'show novaRO time and some events (iam working on it)',
    usage: '?time'
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}