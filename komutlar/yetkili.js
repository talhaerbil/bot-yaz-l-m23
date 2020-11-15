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
  
        .setTitle(`${client.user.username} List | Yetkili Komutları ❃`)
        .setDescription(`
──────────────────────────────
\n**• \`${ayarlar.prefix}ban\`= İstediğiniz Kişiyi Banlar.**
 \n**• \`${ayarlar.prefix}sayaç\` = Sayaç Kanalı Ayarlarsınız.**
\n**• \`${ayarlar.prefix}geçici-sustur\`=  Bir Üyeyi Geçici Olarak Susturursunuz.**
 \n**• \`${ayarlar.prefix}temizle\`= Mesajları Silersiniz.**
\n**• \`${ayarlar.prefix}oylama\`= Oylama Yaparsınız.**
\n**• \`${ayarlar.prefix}otorol\`= Sunucuya Girenlere Otorol Eklersiniz.**
\n**• \`${ayarlar.prefix}kayıtlog\`= Log Kanalı,işaretlersiniz.**
\n**• \`${ayarlar.prefix}otorol-kanal\`= Otorol Kanalını Seçersiniz.**
\n**• \`${ayarlar.prefix}unban\`= Banlı Kişinin,banını Açarsınız.**
\n**• \`${ayarlar.prefix}uyar\`= Etiketlediğiniz Kişiyi,Uyarırsınız.**
\n**• \`${ayarlar.prefix}yapımcım\`= Yapımcıları Gösterir.**
\n**• \`${ayarlar.prefix}seviye\`= Seviye Sistemi Panelini Açar.**
\n**• \`${ayarlar.prefix}yaz\`= Bota Yazı Yazdırırsınız.**
\n**• \`${ayarlar.prefix}sil\`= Yetkili Mesaj Siler. Max : 100.**
\n**• \`${ayarlar.prefix}serverpanel\`= Sunucu Panelini Kurar.**
\n**• \`${ayarlar.prefix}rol-kur\`= Otomatik Gerekli Rolleri Kurar.**
──────────────────────────────`) 
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
  aliases: ['yetkili'],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: 'yetkili'
};
