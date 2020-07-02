const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let Rrole = message.guild.roles.find(val => val.name === 'SUMMER');
   
    if (message.member.roles.has(Rrole.id)){
        await message.member.removeRole(Rrole.id)
        message.reply('summer mode: off');
        
    }
    else { 
        await message.member.addRole(Rrole.id)
        message.reply('summer mode: on');
    }

}
exports.help = {
    name: 'summer',
    desc: 'join or leave',
    usage: '!summer'
}
