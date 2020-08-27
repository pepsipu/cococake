const Discord = require('discord.js');
const Enmap = require('enmap');
const client = new Discord.Client();
const config = require('./client.json');

client.coco = new Enmap({ name: 'count' });
client.coco.ensure('count', 0);

client.on('ready', () => {
});

client.on('message', msg => {
  if (msg.author.bot) {
    return;
  }
  if (msg.content.includes('god')) {
    msg.channel.send('god is dead and we have killed him');
  }
  if (msg.content.includes('pog')) {
    msg.react('728078387452575806') 
  }
  if (msg.content.includes('coco 🍰') || msg.content.includes('coco🍰') || msg.content.includes('coco :cake:') || msg.content.includes('coco:cake:')) {
    client.coco.inc('count');
    msg.react('🍰');
    msg.channel.send(`coco 🍰, cake counter is now ${client.coco.get('count')}`);
  }
  if (msg.content.includes('cringe')) {
    msg.channel.send(`omg bro this is such cringe the cringe is real i cant believe how cringe this is why did you think it was a good idea to post this cringe you look so stupid right now holy cringe this is cringe i wish you knew how cringe this was if you knew how cringe this was you wouldnt have posted this cringe this is literally the most cringe thing i have ever seen and ive seen some cringe let me tell you about the cringe i literally cant believe how cringe this is why would anyone ever post something so cringe cringe is not good cringe is cringe how could you not tell this was cringe i did some cringe once but at least i knew it was cringe do you even know what cringe is holy cringe the cringe i just cant believe you would post something this cringe le cringe has arrived rage comics werent this cringe this is some serious cringe i hope you realise how cringe this is so you never post something this cringe again this is going in my cringe folder to cringe at never post cringe again its too cringe i hope you now know how cringe this is its so cringe`);
  }
});

client.login(config.token);
