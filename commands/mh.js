// import discord cuz we are using embeds
const Discord = require('discord.js');
exports.run = async (bot, message, args) => {
    const mbedSTR = new Discord.RichEmbed() // create new embed
        .setColor('#bceaff') // left bar color for embed
        .addField("Monster Hunter (STR)", "*01x* Ba Gua\n*01x* Golden Boitata's Bell\n*02x* Armor Piece of Dullahan\n*04x* Golden Boitata's Fang\n*07x* Metal Fragment\n*09x* Golden Boitata's Scale\n*10x* Golden Boitata's Rope\n*10x* Golden Boitata's Branch\n*11x* Iron");
    const mbedAGI = new Discord.RichEmbed() // create new embed
        .setColor('#bceaff') // left bar color for embed
        .addField("Monster Hunter (AGI)", "*01x* Hand of God\n*01x* Great Duneyrr's Head\n*04x* Soft Feather\n*05x* Fabric\n*06x* Great Duneyrr's Chains\n*08x* Great Duneyrr's Heart\n*08x* Great Duneyrr's Antler\n*09x* Great Duneyrr's Burning Shoes\n*12x* Elunium");
    const mbedVIT = new Discord.RichEmbed() // create new embed
        .setColor('#bceaff') // left bar color for embed
        .addField("Monster Hunter (VIT)", "*01x* Necklace of Oblivion\n*01x* Ice Troll's Club\n*02x* Comodo Leather\n*02x* Bloody Rune\n*05x* Ice Troll's Fang\n*07x* Ice Troll's Ceremonial Bone\n*08x* Ice Troll's Claw\n*12x* Ice Troll's Ceremonial Skull\n*14x* Oridecon");
    const mbedINT = new Discord.RichEmbed() // create new embed
        .setColor('#bceaff') // left bar color for embed
        .addField("Monster Hunter (INT)", "*01x* Domovoi's Staff\n*01x* Necklace of Wisdom\n*03x* Cursed Ruby\n*05x* Domovoi's Carrot\n*07x* Domovoi's Ears\n*07x* Star Crumb\n*10x* Domovoi's Fur\n*10x* Crystal Fragment\n*11x* Domovoi's Tail");
    const mbedDEX = new Discord.RichEmbed() // create new embed
        .setColor('#bceaff') // left bar color for embed
        .addField("Monster Hunter (DEX)", "*01x* Executioner's Mitten\n*01x* Tendrillion's Head\n*04x* Old Shuriken\n*06x* Tendrillion's Paw\n*07x* Bradium\n*08x* Tendrillion's Fang\n*09x* Tendrillion's Fur\n*11x* Tendrillion's Horn\n*13x* Dragon Scale");
    
    if(args[0].toLowerCase() === 'str') return message.channel.send(mbedSTR); // send the embed to the discord channel
    if(args[0].toLowerCase() === 'agi') return message.channel.send(mbedAGI); // send the embed to the discord channel
    if(args[0].toLowerCase() === 'vit') return message.channel.send(mbedVIT); // send the embed to the discord channel
    if(args[0].toLowerCase() === 'int') return message.channel.send(mbedINT); // send the embed to the discord channel
    if(args[0].toLowerCase() === 'dex') return message.channel.send(mbedDEX); // send the embed to the discord channel
}

/*


vit


*01x* Necklace of Oblivion\n*01x* Ice Troll's Club\n*02x* Comodo Leather\n*02x* Bloody Rune\n*05x* Ice Troll's Fang\n*07x* Ice Troll's Ceremonial Bone\n*08x* Ice Troll's Claw\n*12x* Ice Troll's Ceremonial Skull\n*14x* Oridecon

iint
*01x* Domovoi's Staff\n*01x* Necklace of Wisdom\n*03x* Cursed Ruby\n*05x* Domovoi's Carrot\n*07x* Domovoi's Ears\n*07x* Star Crumb\n*10x* Domovoi's Fur\n*10x* Crystal Fragment\n*11x* Domovoi's Tail




dex
*01x* Executioner's Mitten\n*01x* Tendrillion's Head\n*04x* Old Shuriken\n*06x* Tendrillion's Paw\n*07x* Bradium\n*08x* Tendrillion's Fang\n*09x* Tendrillion's Fur\n*11x* Tendrillion's Horn\n*13x* Dragon Scale

*/