const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('766981161854828564') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.
  //Fe0rlex tarafından geliştirilmiştir
  
exports.run = (client, message, args) => {
//if(message.channel.id != "765661651130908732") return message.channel.send("Bu Komutu Sadece <#765661651130908732> ta Kullanabilirsin");
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('RED')
  //Fe0rlex tarafından geliştirilmiştir
  
        .setTitle(`${client.user.username} List | Komutları ❃`)
        .setDescription(`
\n**• \`${ayarlar.prefix}eğlence\`= Eğlence Komutlarını Görürsünüz.**
 \n**• \`${ayarlar.prefix}yetkili\`=  Yetkili Komutlarını Görürsünüz.**
 \n**• \`${ayarlar.prefix}kullanıcı\` = Kullanıcı Komutlarını Görürsünüz.**
 \n**• \`${ayarlar.prefix}guard\` = Gaurd Komutlarını Görürsünüz**.

» Linkler ; 
» Davet Linkim ; https://discord.com/oauth2/authorize?client_id=777183724118736916&scope=bot&permissions=805331006!`)//.addField ("Linkler ; https://discord.com/oauth2/authorize?client_id=777183724118736916&scope=bot&permissions=805331006")

    //.addField("» Linkler", `[Web Sitesi Yapımda](http://7354124.305283.renderforestsites.com/)  `, false)  
       .setThumbnail(message.author.avatarURL)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
.setImage('https://media.discordapp.net/attachments/777181570016083988/777182863916531712/standard.gif')
     return message.channel.sendEmbed(embed);
  //Fe0rlex tarafından geliştirilmiştir
    //Fe0rlex tarafından geliştirilmiştir
    //Fe0rlex tarafından geliştirilmiştir
    //Fe0rlex tarafından geliştirilmiştir
    //Fe0rlex tarafından geliştirilmiştir
    //Fe0rlex tarafından geliştirilmiştir
    //Fe0rlex tarafından geliştirilmiştir
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: 'yardım'
};
