const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let Rrole = message.guild.roles.find(val => val.name === 'pvm');
   
    if (message.member.roles.has(Rrole.id)){
        await message.member.removeRole(Rrole.id)
        message.reply('pvm mode: off');
        
    }
    else { 
        await message.member.addRole(Rrole.id)
        message.reply('pvm mode: on');
    }

}
exports.help = {
    name: 'snowball',
    desc: 'join or leave',
    usage: '!pvm'
}
