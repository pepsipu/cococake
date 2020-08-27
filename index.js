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
});

client.login(config.token);
