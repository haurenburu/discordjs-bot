const Discord = require('discord.js');
const ms = require('ms');

exports.run = async(bot, message, args) => {
    let toMute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!toMute) return message.reply('couldnt find user');
    if(toMute.hasPermission('MANAGE_MESSAGES')) return message.reply('You don\'t have permission to do that!');
    let muteRole = message.guild.roles.find(x => x.name === ('Muted'));
    if(!muteRole){
        try{
            muteRole = await message.guild.createRole({
                name: 'Muted',
                color: '#000000',
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    }

    let muteTime = args[1];
    if(!muteTime) return message.reply("Please specify a time!");

    await(toMute.addRole(muteRole.id));
    var x = message.reply(`Imuted <@${toMute.id}> for ${ms(ms(muteTime))}`);
    setTimeout(function(){
        toMute.removeRole(muteRole.id);
        x.then(sentMessage => sentMessage.delete());
        message.reply(`<@${toMute.id}> has benn unmuted!`);
    }, ms(muteTime))
}
exports.help = {
    name: 'mute',
    desc: 'mute a user for <x> time',
    usage: '?mute <@user> 10ms | ?mute <@user> 10s | ?mute <@user> 10m'
}