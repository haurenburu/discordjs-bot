const fs = require('fs');
const path = require('path');
exports.run = async (bot, message, args, ops) => {
    var meme = [];
    let msg = '';
    let delaymsg = await message.channel.send('Loading meme...');
    if(args[0] === 'help'){
        fs.readdir('./images/memes', (err, files) => {
            if(err) console.log(err);
            let memes = files.filter(f => f.split('.').pop() === 'png');
            memes.forEach((f,i) => {
                meme.push(f);
            });
            if(memes.length <= 0) console.log('No memes to load!');

            for (let i = 0; i< meme.length; i++){
                var filename = meme[i];
                msg += ', '+path.parse(filename).name; // hello
            }
            delaymsg.delete();
            message.channel.send({embed:{title: 'Meme list', color: 0x3b88c3, description: 'help' + msg}})
        });
        
    }
    delaymsg.delete();
    await message.channel.send({files:[
        {
            attachment: `./images/memes/${args[0]}.png`,
        }
    ]})
    

}
exports.help = {
    name: 'meme',
    desc: 'show a meme pic',
    usage: '?meme tendachi'
}