const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent,
  GatewayIntentBits.GuildMembers], partials: [Partials.Channel]
});

function checkTime() {
  let date = new Date();
  console.log(date.getDay() + "  " + date.getHours());

  if (date.getDay() === 3 && date.getHours() == 6) {
    const channel = client.channels.cache.get('1034528446061215906');
    channel.send({ files: ['/img/' + Math.floor(Math.random()*10) + '.jpg'] });
    i++;
    i = i % 10;
  }
}
client.on('ready', () => {
  setInterval(checkTime, 1000);
})

client.login(${{ secrets.TOKEN }})
