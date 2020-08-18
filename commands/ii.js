const Discord = require('discord.js');
const axios = require('axios');
const cheerio = require('cheerio');

exports.run = async (bot, message, args, ops) => {
	
	if(args.length < 1) {
		return message.channel.send("need args bruh");
	}
	let html = await axios.request(`https://www.novaragnarok.com/?module=vending&action=view&id=${args[0]}`,{
		method: 'get',
		headers: {
			Cookie: `fluxSessionData=${process.send.cookie}`
		}
	})
	let $ = await cheerio.load(html.data);

	let name = $('#market-item-name > span > a').text();

	let desc = $('body > div.content.vendingview > div.container.main > div.table-responsive > table:nth-child(2) > tbody > tr:nth-child(1) > td > div').text();

	if(name == "Unknown") return message.channel.send("Invalid item");

	const mess = new Discord.RichEmbed()
		.setColor('#3b88c3')
		.setAuthor(`${name}`, `https://www.novaragnarok.com/data/items/icons2/${args[0]}.png`, `https://www.novaragnarok.com/?module=vending&action=view&id=${args[0]}` )
		.setDescription(desc)
		.setThumbnail(`https://www.novaragnarok.com/data/items/images2/${args[0]}.png`)
		.setURL(`https://www.novaragnarok.com/?module=vending&action=view&id=${args[0]}`)
	message.channel.send(mess);
}

exports.help = {
	name: 'item info',
	desc: 'show a novaro item description',
	usage: "?ii 607"
}
