const fs = require('fs');
const Discord = require('discord.js');
exports.run = async (bot, message, args, ops) => {
    let botEmbed = new Discord.RichEmbed() // create new embed  
        .setDescription('Bot Information') // this is a description of embed
        .setColor('#3b88c3') // color for left bar
        .addField('Commands', '!avatar / !botinfo / !char / !choose / !events / !food / !guildinfo / !head / !help / !icon / !meme / !memes / !mh / !munbalance / !mute / !pause / !ping / !play / !queue / !resume / !sig / !sigl / !skip / !stop / !userinfo / !volume') // name and content
    return message.channel.send(botEmbed);
        
    
    
    // let teste = [];
    // fs.readdir("./commands/", (err, files) => {
    //     if (err) console.error(err);

    //     let jsfiles = files.filter(f => f.split(".").pop() === "js");
    //     if (jsfiles.length <= 0) {
    //         console.log("No commands to load!");
    //     }
    //     jsfiles.forEach((f, i) => {
    //         let props = require(`./${f}`);
    //         teste.push(props);
    //     });
    //     let commands = '';
    //     for (i in teste) {
    //         commands += `**${teste[i].help.name}**: ${teste[i].help.usage}\n`;
                        
    //     }
    //         message.channel.send({embed: { color: 0x3b88c3, title: 'Help', description: commands }})
    // });
    
}
exports.help = {
    name: 'help',
    desc: 'show all commands',
    usage: '?help'
}