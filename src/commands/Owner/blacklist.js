const Emojis = require('../../Structures/Utils/emojis.js');

module.exports = {
  name: 'blacklist',
  alises: ['bl'],
  ownerOnly: true,
  async exec({ client, message, args, player, lang }) {

    const user = client.utils.getUser(args[1])
    const doc = client.db.user.findOne({ _id: user?.id })
    if(!user || !doc) return message.reply('usuario não encontrado.')

    if(['add', 'remove'].some(arg => args[0] == arg)) {
      if(args[0] == 'add') {
        client.db.user.findOneAndUpdate({ _id: user.id }, {
          $set: {
            blacklist: true
          }})
        message.reply('ok.')
      } else if(args[0] == 'remove') {
        client.db.user.findOneAndUpdate({ _id: user.id }, { 
          $set: {
            blacklist: false
        }})
        message.reply('ok.')
      }
    } else {
      message.reply('bruh.')
    }
  }
}