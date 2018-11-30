const fs = require('fs');
exports.run = async (bot, message, args, ops) => {
    let teste = [];
    fs.readdir("./commands/", (err, files) =>{
        if(err) console.error(err);
    
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if(jsfiles.length <= 0){
            console.log("No commands to load!");
        }
        jsfiles.forEach((f, i) => {
            let props = require(`./${f}`);
            teste.push(props);
        });
        for(i in teste){
            message.author.send({ embed: { color: 0x3b88c3, title: 'Name', description: teste[i].help.name, fields: [{name: 'Description', value: teste[i].help.desc},{name: 'Usage', value: teste[i].help.usage}]}})
        }
    });
}
exports.help = {
    name: 'help',
    desc: 'show all commands',
    usage: '?help'
}