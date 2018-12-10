const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    let Rrole = message.guild.roles.find(val => val.name === 'Snowball');
    let Rmember = message.author;
    // if(Rmember.roles.has(Rrole.id)) await Rmember.removeRole(Rrole.id);
    
    if (message.member.roles.has(Rrole.id)){
        await message.member.removeRole(Rrole.id)
    }
    else { 
        await message.member.addRole(Rrole.id)
    }

}
exports.help = {
    name: 'snowball',
    desc: 'join or leave',
    usage: '!snowball'
}