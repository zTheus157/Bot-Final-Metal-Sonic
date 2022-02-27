const { exec } = require("child_process")

module.exports = {
  name: 'shell',
  aliases: ['terminal', 'sh', 'sheel'],
  run: async (client, message, args, player, lang) => {
    if (!client.owners.some(x => x === message.author.id)) return;
     
    const cmd = args.join(" ")
    if(!cmd) return;

    exec(cmd, (err, res) => {
      if(err) return message.reply(`\`\`\`${err}\`\`\``)
      message.reply({content: `\`\`\`prolong\n$ ${cmd}\n\n${res.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '')}\`\`\``})
  })
  },
};
