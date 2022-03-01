const Emojis = require('../../Structures/Utils/emojis')

module.exports = {
  name: 'unlock',
  aliases: ['destrancar'],
  cooldown: 2,
  ownerOnly: false,
  run: async (client, message, args, player, lang) => {
        if (!message.member.permissions.has('MANAGE_CHANNELS') && !client.owners.some(id => id === message.author.id) )
          return message.reply(`**${Emojis.errado} » ${lang.commands.unlock.userPermission}**`);

        if (!message.guild.me.permissions.has('MANAGE_CHANNELS'))
          return message.reply(`**${Emojis.errado} » ${lang.commands.unlock.myPermission}**`);

        message.channel.permissionOverwrites.edit(message.guild.id, {
          SEND_MESSAGES: true,
        });

        message.reply(`**${Emojis.ban} » ${lang.commands.unlock.sucess}!**`);
  }
}
