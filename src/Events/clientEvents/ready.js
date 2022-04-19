const Music = require('../../Structures/Music.js');
const { cyan, green } = require('colors');
module.exports = {
  name: 'ready',
  async exec(client) {
    console.log(cyan('[CLIENT]'), green(`Logged in as ${client.user.username} with ${client.guilds.cache.size.toLocaleString()} Servers`));

    client.music.start(client.user.id);

    setInterval(() => { 
      client.user.setActivity(`<help - ${client.guilds.cache.size.toLocaleString()} Servers`);
    }, 60 * 60 * 1000);
  }
};
