// import stuffs
const Discord = require('discord.js'); // discordjs modules
const bot = new Discord.Client(); // create new bot
const { token, prefix, owner} = require('./config'); // import the config file
const active = new Map(); // queue for songs
const fs = require('fs');
const schedule = require('node-schedule');
// listiners

// listening for warnings
bot.on('warn', console.warn); 
// listening for errors
bot.on('error', console.error); 
// console log if disconect for any reason
bot.on('disconnect', () => console.log('just disconnected...i wll reconnect soon...')) 
// console log if bot is reconecting
bot.on('reconnecting', () => console.log('reconecting...')) 
// console log when bot is ready
bot.on('ready', async () => {
    console.log('\x1b[36m%s\x1b[0m',`${bot.user.username} is online!`); // log itself
    bot.user.setActivity('!help', {type: 'PLAYING'}); // set activity for bot perfil
    
    

    // snowball announcement
    let j = schedule.scheduleJob('25 * * * *', function(){
        let guild = bot.guilds.get('292965480254275587');
        let sh = new Date().getHours();
        let h = sh;
        
        console.log(h);
        // let event = [5,11,17,23] //-7 / -3
        let event = [1,7,13,19]

        if(event.includes(h) && guild && guild.channels.get('292965480254275587')){
            guild.channels.get('292965480254275587').send('<@&521679132484960266> About 5 minutes to snowball fight!!!');
        }
    });








});
// watch for chat for commands
bot.on('message', message => {
    let args = message.content.slice(prefix.length).trim().split(' '); // split commands and arguments
    let cmd = args.shift().toLowerCase(); // error handling from upper or lower case (CoMmAnD works!)
    //if (message.author.bot) return; // if the message author is a bot just ignore
    if (!message.content.startsWith(prefix)) return; // if message is not a command (without a prefix or something)
    // try catch for command handlers
    try {
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];
        let ops = { owner: owner, active: active } // options for commands
        let commandFile = require(`./commands/${cmd}.js`); // wish command is?
        commandFile.run(bot, message, args, ops); // run the command
    } catch (e) {
        console.log(e.stack); // error? print in console
    }
})

bot.login(token); // finally runs the bot!