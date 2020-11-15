const Discord = require('discord.js');
exports.run = (client, m, args) => {
  let yst = m.mentions.members.first()
  if(!yst) return m.reply("Kullanıcı Belirtiniz")
  yst.roles.add("vip rolü id si")
  m.reply("Rol Verildi")
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vip"],
  permlevel: 0
};

exports.help = {
  name: 'vip',
  description: 'Bot pingini gösterir',
  usage: 'vip'
};
