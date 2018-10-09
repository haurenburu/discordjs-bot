exports.run = async (bot, message, args) => {
    let time = new Date();
    let timeServer = time.subTime(4,0)
    let serverHours = time.getHours();
    let serverMinutes = time.getMinutes();
    let messageContent = '';
    let monsterHunter = [3,9,16,21];
    let slotMachine = [5,11,17,23];


    if(slotMachine.includes(serverHours)){
        if (serverMinutes >= 0 && serverMinutes < 6) messageContent += `Slot Machine starts in ${6 - serverMinutes} minutes\n`
        else if (serverMinutes > 5 && serverMinutes < 12) messageContent += `Slot Machine is Active for ${11-serverMinutes} more minutes\n`
        else if (serverMinutes > 12) messageContent += `Slot Machine starts in ${fixTime((serverHours - slotMachine[0])-1)}:${fixTime((59 - serverMinutes)+5)}\n`
    } else {
        if (serverHours >= 0 && serverHours < slotMachine[0] )                  messageContent +=  `Slot Machine starts in ${fixTime((slotMachine[0]-1) - serverHours)}:${fixTime((59 - serverMinutes)+5)}\n`
        else if (serverHours > slotMachine[0] && serverHours < slotMachine[1] ) messageContent +=  `Slot Machine starts in ${fixTime((slotMachine[1]-1) - serverHours)}:${fixTime((59 - serverMinutes)+5)}\n`
        else if (serverHours > slotMachine[1] && serverHours < slotMachine[2] ) messageContent +=  `Slot Machine starts in ${fixTime((slotMachine[2]-1) - serverHours)}:${fixTime((59 - serverMinutes)+5)}\n`
        else if (serverHours > slotMachine[2] && serverHours < slotMachine[3] ) messageContent +=  `Slot Machine starts in ${fixTime((slotMachine[3]-1) - serverHours)}:${fixTime((59 - serverMinutes)+5)}\n`
        else if (serverHours > slotMachine[3] && serverHours <= 23 )            messageContent +=  `Slot Machine starts in ${fixTime((slotMachine[3]+3) - serverHours)}:${fixTime((59 - serverMinutes)+5)}\n`
    }

    if(monsterHunter.includes(serverHours)){
        messageContent += `Monster Hunter Happy hour is Active for ${60 - serverTime.getMinutes()} more minutes\n`;
    } else {
        if (serverHours >= 0 && serverHours < monsterHunter[0] ) messageContent +=  `Monster Hunter happy hour starts in ${fixTime((monsterHunter[0]-1) - serverHours)}:${fixTime(59 - serverMinutes)}\n`
        else if (serverHours > monsterHunter[0] && serverHours < monsterHunter[1] ) messageContent +=  `Monster Hunter happy hour starts in ${fixTime((monsterHunter[1]-1) - serverHours)}:${fixTime(59 - serverMinutes)}\n`
        else if (serverHours > monsterHunter[1] && serverHours < monsterHunter[2] ) messageContent +=  `Monster Hunter happy hour starts in ${fixTime((monsterHunter[2]-1) - serverHours)}:${fixTime(59 - serverMinutes)}\n`
        else if (serverHours > monsterHunter[2] && serverHours < monsterHunter[3] ) messageContent +=  `Monster Hunter happy hour starts in ${fixTime((monsterHunter[3]-1) - serverHours)}:${fixTime(59 - serverMinutes)}\n`
        else if (serverHours > monsterHunter[3] && serverHours <= 23 ) messageContent += `Monster Hunter happy hour starts in ${fixTime((monsterHunter[3]+3) - serverHours)}:${fixTime(59 - serverMinutes)}\n`
    }

    message.channel.send({embed:{color: 0x3b88c3,title: 'Events', description: messageContent}});
}
exports.help = {
    name: 'time',
    desc: 'show novaRO time and some events (iam working on it)',
    usage: '?time'
}



















function fixTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

Date.prototype.subTime = function(h,m){
    this.setHours(this.getHours()-h);
    this.setMinutes(this.getMinutes()-m);
    return this;
}
Date.prototype.addTime = function(h,m){
    this.setHours(this.getHours()+h);
    this.setMinutes(this.getMinutes()+m);
    return this;
}
