const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let Rrole = message.guild.roles.find(val => val.name === 'Snowball');
   
    if (message.member.roles.has(Rrole.id)){
        await message.member.removeRole(Rrole.id)
        message.reply('You will no longer be notified');
        
    }
    else { 
        await message.member.addRole(Rrole.id)
        message.reply('You will be notified');
    }

}
exports.help = {
    name: 'snowball',
    desc: 'join or leave',
    usage: '!snowball'
}