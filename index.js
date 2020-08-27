const Discord = require('discord.js');
const client = new Discord.Client();

let coco_count = 0;

client.on('ready', () => {
  let g = client.guilds.resolve('695047575807590440');
  let p = g.members.resolve('475525381609357313');
  p.roles.add(g.roles.resolve('748430927570403349'));
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
    msg.react('🍰');
    ++coco_count;
    msg.channel.send(`coco 🍰, cake counter is now ${coco_count}`)
  }
});

client.login('');
