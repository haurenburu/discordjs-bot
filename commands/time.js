const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  let Rrole = message.guild.roles.find(val => val.name === 'SUMMER');
  let sh = new Date().getHours();
   
    message.channel.send(sh);

}
exports.help = {
    name: 'summer',
    desc: 'join or leave',
    usage: '!summer'
}
