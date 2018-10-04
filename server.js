// import stuffs
const Discord = require('discord.js');
const bot = new Discord.Client();
const { token, prefix, owner} = require('./config/bot');
const active = new Map();


bot.on('warn', console.warn);
bot.on('error', console.error);
bot.on('disconnect', () => console.log('just disconnected...i wll reconnect soon...'))
bot.on('reconnecting', () => console.log('reconecting...'))
bot.on('ready', async () => {
    console.log('\x1b[36m%s\x1b[0m',`${bot.user.username} is online!`);
    bot.user.setActivity('porn', {type: 'WATCHING'});
});
bot.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    try {

        delete require.cache[require.resolve(`./commands/${cmd}.js`)];

        let ops = {
            owner: owner,
            active: active
        }

        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args, ops);
    } catch (e) {
        console.log(e.stack);
    }
})

bot.login(token);