const fs = require('fs');
const path = require('path');
exports.run = async (bot, message, args, ops) => {
    var meme = [];
    let msg = '';
    let delaymsg = await message.channel.send('Loading meme...');
    if(!args[0]) return delaymsg.edit('You have to specify a meme...');
    
    if(args[0] === 'superhans'){
        await message.channel.send({files:[
            {
                attachment: `./images/memes/superhans.gif`,
            }
        ]})
        delaymsg.delete();
        return;
    }
    
    if(args[0] === 'help'){
        fs.readdir('./images/memes', (err, files) => {
            if(err) console.log(err);
            let memes = files.filter(f => f.split('.').pop() === 'png' || 'gif');
            memes.forEach((f,i) => {
                meme.push(f);
            });
            if(memes.length <= 0) console.log('No memes to load!');

            for (let i = 0; i< meme.length; i++){
                var filename = meme[i];
                msg += ', '+path.parse(filename).name; // hello
            }
            delaymsg.delete();
            return message.channel.send({embed:{title: 'Meme list', color: 0x3b88c3, description: 'help' + msg}})
        });
        
    }
    await message.channel.send({files:[
        {
            attachment: `./images/memes/${args[0]}.png`,
        }
    ]})
    delaymsg.delete();
    
}
exports.help = {
    name: 'meme',
    desc: 'show a meme pic',
    usage: '?meme tendachi'
}