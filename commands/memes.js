const fs = require('fs');
const path = require('path');
exports.run = async (bot, message, args, ops) => {
    let memes = [];
    let num;
    let msg = await message.channel.send('loading meme...');

    fs.readdir('./images/memes', (err, files) => {
        let meme = files.filter(f => f.split('.').pop() === 'png');
        meme.forEach((f, i) => {
            memes.push(f);
        });
        num = Math.floor(Math.random() * meme.length);
        msg.delete();
        message.channel.send({
            files: [
                {
                    attachment: `./images/memes/${memes[num]}`,
                }
            ]
        })
    });
}