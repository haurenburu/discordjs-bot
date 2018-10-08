exports.run = async (bot, message, args, ops) => {
    let quantToMake = args[1] || 1;
    if (args[2] === 'mega' || args[2] === 'm') quantToMake *= 12;
    if (args[1] === 'mega' || args[1] === 'm') quantToMake = 12;
    
    
    let foods = {
        str: {
            name: 'Savage BBQ',
            ingrediente1: {id: 6248, name: 'Melange Pot', quant: 1},
            ingrediente2: {id: 6250, name: "Cooking Skewer", quant: 1},
            ingrediente3: {id: 6251, name: "Black Charcoal", quant: 1},
            ingrediente4: {id: 6249, name: "Savage Meat", quant: 1},
        },
        agi: {
            name: 'Drosera Herb Stew',
            ingrediente1: {id: 6248, name: 'Melange Pot', quant: 1},
            ingrediente2: {id: 6255, name: 'Large Cookpot', quant: 1 },
            ingrediente3: {id: 507, name: 'Red Herb', quant: 3 },
            ingrediente4: {id: 609, name: 'White Herb', quant: 3 },
            ingrediente5: {id: 610, name: 'Blue Herb', quant: 3 },
            ingrediente6: {id: 6259, name: 'Drosera Tentacle', quant: 3 }
        },
        vit: {
            name: 'Minor Brisket',
            ingrediente1: {id: 6248, name: 'Melange Pot', quant: 1 },
            ingrediente2: {id: 6255, name: 'Large Cookpot', quant: 1 },
            ingrediente3: {id: 6254, name: 'Beef Head', quant: 2 }
        },
        int: {
            name: 'Warg Blood Cocktail',
            ingrediente1: {id: 6248, name: 'Melange Pot', quant: 1},
            ingrediente2: {id: 6253, name:'Cold Ice', quant: 2 },
            ingrediente3: {id: 6252, name:'Blood Of Wolf', quant: 3 }
        },
        dex: {
            name: 'Siroma Icetea',
            ingrediente1: {id: 6248, name: 'Melange Pot', quant: 1 },
            ingrediente2: {id: 6258, name: 'Comodo Tropical Fruit', quant: 1 },
            ingrediente3: {id: 6257, name: 'Ice Crystal', quant: 2 },
            ingrediente4: {id: 6256, name: 'Ice Piece', quant: 3 }
        },
        luk: {
            name: 'Petite Tail Noodles',
            ingrediente1: {id: 6248, name: 'Melange Pot', quant: 1},
            ingrediente2: {id: 6262, name: 'Cool Gravy', quant: 1},
            ingrediente3: {id: 6261, name: 'Fine Noodle', quant: 1},
            ingrediente4: {id: 6260, name: 'Petite\'s Tail', quant: 2}
        }
    }
    
    if (!args[0]) return message.reply('i need some argument buddy');
    if (args[0] === 'str') {
        message.channel.send(
            {embed: 
                { color: 0x3b88c3, title: foods.str.name, 
                    description: `
                    *${pad(foods.str.ingrediente1.quant*quantToMake)}x* ${foods.str.ingrediente1.name} (${foods.str.ingrediente1.id}) 
                    *${pad(foods.str.ingrediente2.quant*quantToMake)}x* ${foods.str.ingrediente2.name} (${foods.str.ingrediente2.id}) 
                    *${pad(foods.str.ingrediente3.quant*quantToMake)}x* ${foods.str.ingrediente3.name} (${foods.str.ingrediente3.id}) 
                    *${pad(foods.str.ingrediente4.quant*quantToMake)}x* ${foods.str.ingrediente4.name} (${foods.str.ingrediente4.id})
                    ` }})
    }
    if (args[0] === 'agi') {
        message.channel.send(
            {embed: 
                { color: 0x3b88c3, title: foods.agi.name, 
                    description: `
                    *${pad(foods.agi.ingrediente1.quant*quantToMake)}x* ${foods.agi.ingrediente1.name} (${foods.agi.ingrediente1.id}) 
                    *${pad(foods.agi.ingrediente2.quant*quantToMake)}x* ${foods.agi.ingrediente2.name} (${foods.agi.ingrediente2.id}) 
                    *${pad(foods.agi.ingrediente3.quant*quantToMake)}x* ${foods.agi.ingrediente3.name} (${foods.agi.ingrediente3.id}) 
                    *${pad(foods.agi.ingrediente4.quant*quantToMake)}x* ${foods.agi.ingrediente4.name} (${foods.agi.ingrediente4.id})
                    *${pad(foods.agi.ingrediente5.quant*quantToMake)}x* ${foods.agi.ingrediente5.name} (${foods.agi.ingrediente5.id})
                    *${pad(foods.agi.ingrediente6.quant*quantToMake)}x* ${foods.agi.ingrediente6.name} (${foods.agi.ingrediente6.id})
                    ` }})
    }
    if (args[0] === 'vit') {
        message.channel.send(
            {embed: 
                { color: 0x3b88c3, title: foods.vit.name, 
                    description: `
                    *${pad(foods.vit.ingrediente1.quant*quantToMake)}x* ${foods.vit.ingrediente1.name} (${foods.vit.ingrediente1.id}) 
                    *${pad(foods.vit.ingrediente2.quant*quantToMake)}x* ${foods.vit.ingrediente2.name} (${foods.vit.ingrediente2.id}) 
                    *${pad(foods.vit.ingrediente3.quant*quantToMake)}x* ${foods.vit.ingrediente3.name} (${foods.vit.ingrediente3.id}) 
                    ` }})
    }
    if (args[0] === 'int') {
        message.channel.send(
            {embed: 
                { color: 0x3b88c3, title: foods.int.name, 
                    description: `
                    *${pad(foods.int.ingrediente1.quant*quantToMake)}x* ${foods.int.ingrediente1.name} (${foods.int.ingrediente1.id}) 
                    *${pad(foods.int.ingrediente2.quant*quantToMake)}x* ${foods.int.ingrediente2.name} (${foods.int.ingrediente2.id}) 
                    *${pad(foods.int.ingrediente3.quant*quantToMake)}x* ${foods.int.ingrediente3.name} (${foods.int.ingrediente3.id}) 
                    ` }})
    }
    if (args[0] === 'dex') {
        message.channel.send(
            {embed: 
                { color: 0x3b88c3, title: foods.dex.name, 
                    description: `
                    *${pad(foods.dex.ingrediente1.quant*quantToMake)}x* ${foods.dex.ingrediente1.name} (${foods.dex.ingrediente1.id}) 
                    *${pad(foods.dex.ingrediente2.quant*quantToMake)}x* ${foods.dex.ingrediente2.name} (${foods.dex.ingrediente2.id}) 
                    *${pad(foods.dex.ingrediente3.quant*quantToMake)}x* ${foods.dex.ingrediente3.name} (${foods.dex.ingrediente3.id}) 
                    *${pad(foods.dex.ingrediente4.quant*quantToMake)}x* ${foods.dex.ingrediente4.name} (${foods.dex.ingrediente4.id})
                    ` }})
    }
    if (args[0] === 'luk') {
        message.channel.send(
            {embed: 
                { color: 0x3b88c3, title: foods.luk.name, 
                    description: `
                    *${pad(foods.luk.ingrediente1.quant*quantToMake)}x* ${foods.luk.ingrediente1.name} (${foods.luk.ingrediente1.id}) 
                    *${pad(foods.luk.ingrediente2.quant*quantToMake)}x* ${foods.luk.ingrediente2.name} (${foods.luk.ingrediente2.id}) 
                    *${pad(foods.luk.ingrediente3.quant*quantToMake)}x* ${foods.luk.ingrediente3.name} (${foods.luk.ingrediente3.id}) 
                    *${pad(foods.luk.ingrediente4.quant*quantToMake)}x* ${foods.luk.ingrediente4.name} (${foods.luk.ingrediente4.id})
                    ` }})
    }

}

exports.help = {
    name: 'food',
    desc: 'calculate the recipe to make +20 foods',
    usage: '?food <str> | ?food <str> m | ?food <str> <10> | ?food <str> <10> m'

}
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}