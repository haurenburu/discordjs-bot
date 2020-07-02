const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  let Rrole = message.guild.roles.find(val => val.name === 'SUMMER');
  let d = new Date()
  let h = d.getHours();
  let m = d.getMinutes();
   
    message.channel.send(`${h}:${m}`);

}
exports.help = {
    name: 'summer',
    desc: 'show the heroku time lmao',
    usage: '!time'
}
