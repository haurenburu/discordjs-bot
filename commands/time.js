const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
  
  function addZero(v) {
    if(v < 10){
      v = '0'+v;
    }
    return v;
  }

  let Rrole = message.guild.roles.find(val => val.name === 'SUMMER');
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
   
  message.channel.send(addZero(h)+':'+addZero(m));

}
exports.help = {
    name: 'summer',
    desc: 'show the heroku time lmao',
    usage: '!time'
}
