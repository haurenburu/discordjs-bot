const fs = require('fs');
const path = require('path');
exports.run = async (bot, message, args, ops) => {
    if (message.guild.id !== '292965480254275587' && message.guild.id !== '529006231810211880') return message.channel.send('This command only works on some servers');
    var meme = [];
    let msg = '';
    let delaymsg = await message.channel.send('Looking for meme...');
    if(!args[0]) return delaymsg.edit('You have to specify a meme...');

    console.log(args[0]);
    console.log(args[0].toLowerCase());
    
  
    
    if(args[0].toLowerCase() === 'superhans'){
        await message.channel.send({files:[
            {
                attachment: `./images/memes/superhans.gif`,
            }
        ]})
        delaymsg.delete();
        return;
    } 
    else if(args[0].toLowerCase() === 'fu') {
        delaymsg.edit("Ｐｌｅａｓｅ，　ｓｔｏｐ　ｃｒｙｉｎｇ．　Ｉｆ　ｙｏｕ＇ｒｅ　ｒｅａｌｌｙ　ｇｏｏｄ　ａｔ　ｕｓｉｎｇ　Ｓｕｒａ，　ｙｏｕ　ｗｏｎ＇ｔ　ｈａｖｅ　ａ　ｐｒｏｂｌｅｍ　ｂｙ　ｓｔｉｌｌ　ｕｓｉｎｇ　ｉｔ　ｗｈｅｎ　Ｓｎａｐ　ｇｅｔｓ　ｒｅｍｏｖｅｄ．　Ａ　ｊｏｂ　ｄｏｅｓｎ＇ｔ　ｄｉｅ��ｂｅｃａｕｓｅ　ｏｆ　ａ　ｓｉｎｇｌｅ　ｓｋｉｌｌ　ｔｈａｔ　ｂｒｅａｋｓ　ｔｈｅ　ｇａｍｅ．　Ｓｕｒａ＇ｓ　ｉｄｅｎｔｉｔｙ　ｇｏｅｓ　ｍｕｃｈ　ｆｕｒｔｈｅｒ　ｔｈａｎ　ｔｈａｔ．　Ｉｎ　ｔｈｅ　ｌｏｒｅ，　ｔｈｅｙ＇ｒｅ　Ｍｏｎｋｓ　ｔｈａｔ　ｌｅａｒｎｅｄ　ｔｏ　ｄｏｍｉｎａｔｅ　ｔｈｅ　Ｄｅｍｏｎ＇ｓ　Ｐｏｗｅｒ．　Ｓｏ，　ｐｒｏｐｅｒｌｙ　ｔａｌｋｉｎｇ，　ｔｈｅｉｒ　ｍａｉｎ　ｓｋｉｌｌ　ｓｈｏｕｌｄ　ｂｅ　ｃｏｎｓｉｄｅｒｅｄ　Ｇａｔｅｓ　ｏｆ　Ｈｅｌｌ")
        return;
    }
    else if(args[0].toLowerCase() == 'helitoptero'){
        delaymsg.edit(`
            :top:       :top: :top:       :top: :top: 
            :top: :top: :helicopter: :top: :top: 
            :top: :top: QUER NAMORAR COMIGO?:top: :top: 
                   :top: :top:        :top: :top: 
        `);
    }
    
    else if (args[0].toLowerCase() == 'know'){
        delaymsg.edit('https://youtu.be/gYEShKJzDBY');
        return;
    }
    
    else if(args[0].toLowerCase() === 'help'){
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
        
    } else {

    
    await message.channel.send({files:[
        {
            attachment: `./images/memes/${args[0].toLowerCase()}.png`,
        }
        ]})
        delaymsg.delete();
    }
    
}
exports.help = {
    name: 'meme',
    desc: 'show a meme pic',
    usage: '?meme tendachi'
}
