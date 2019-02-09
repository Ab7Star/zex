const Discord = require('discord.js');

const client = new Discord.Client();

const moment = require('moment');

const Canvas = require('canvas');

const fs = require('fs');

const jimp = require('jimp');

const prefix = "+";

 

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

  console.log('')

  console.log('')

  console.log('╔[═════════════════════════════════════════════════════════════════]╗')

  console.log(`[Start] ${new Date()}`);

  console.log('╚[═════════════════════════════════════════════════════════════════]╝')

  console.log('')

  console.log('╔[════════════════════════════════════]╗');

  console.log(`Logged in as * [ " ${client.user.username} " ]`);

  console.log('')

  console.log('Informations :')

  console.log('')

  console.log(`servers! [ " ${client.guilds.size} " ]`);

  console.log(`Users! [ " ${client.users.size} " ]`);

  console.log(`channels! [ " ${client.channels.size} " ]`);

  console.log('╚[════════════════════════════════════]╝')

  console.log('By WOLF_KSA')

  console.log('╔[════════════]╗')

  console.log(' Bot Is Online')

  console.log('╚[════════════]╝')

  console.log('')

  console.log('')

});

 

client.on('ready', () => {

   console.log(`----------------`);

      console.log(`Desert Bot- Script By : Diamond Codes`);

        console.log(`----------------`);

      console.log(`ON ${client.guilds.size} Servers '     Script By : Diamond Codes ' `);

    console.log(`----------------`);

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`+help | ZEX SHOP`,"http://twitch.tv/S-F")

client.user.setStatus("online")

 

});

 

client.on ("guildMemberAdd", member => {

 

   var role = member.guild.roles.find ("name", "zex");

   member.addRole (role);

 

})

 

client.on ("guildMemberRemove", member => {

   

})

 

client.on("guildMemberAdd", member => {

      const welcomer =  member.guild.channels.find('name', '✷-welcome');

      //*let welcomer = member.guild.channels.find("name","welcome");

      if(!welcomer) return;

      if(welcomer)

    moment.locale('ar-ly');

         var h = member.user;

        let heroo = new Discord.RichEmbed()

        .setColor('RANDOM')

        .setThumbnail(h.avatarURL)

        .setAuthor(h.username,h.avatarURL)

        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            

         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      

         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")

     welcomer.send({embed:heroo});          

         

      var Canvas = require('canvas')

      var jimp = require('jimp')

     

      const w = ['./img/w4.png'];

     

              let Image = Canvas.Image,

                  canvas = new Canvas(401, 202),

                  ctx = canvas.getContext('2d');

              ctx.patternQuality = 'bilinear';

              ctx.filter = 'bilinear';

              ctx.antialias = 'subpixel';

              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';

              ctx.shadowOffsetY = 2;

              ctx.shadowBlur = 2;

              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

                  if (err) return console.log(err)

                  let BG = Canvas.Image;

                  let ground = new Image;

                  ground.src = Background;

                  ctx.drawImage(ground, 0, 0, 401, 202);

     

      })

     

                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;

                      jimp.read(url, (err, ava) => {

                          if (err) return console.log(err);

                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                              if (err) return console.log(err);

     

                              //AVATARً

                              let Avatar = Canvas.Image;

                              let ava = new Avatar;

                              ava.src = buf;

                              ctx.drawImage(ava, 152, 27, 95, 95);

                             

                                                      //wl

                              ctx.font = '20px Arial Bold';

                              ctx.fontSize = '20px';

                              ctx.fillStyle = "#FFFFFF";

                              ctx.textAlign = "center";

                                                         ctx.fillText(member.user.username, 200, 154);

                             

                              //NAMEً

                              ctx.font = '20px Arial';

                              ctx.fontSize = '28px';

                              ctx.fillStyle = "#FFFFFF";

                              ctx.textAlign = "center";

      ctx.fillText(`You Are Num  ${member.guild.memberCount} !! `

                              , 200, 190);

    welcomer.sendFile(canvas.toBuffer())

     

     

     

      })

      })

     

   

      });

 

 

 

client.on('message', message => {

 

    var prefix = "+";

          if(!message.channel.guild) return;

if(message.content.startsWith(prefix + 'bc')) {

if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));

if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );

let args = message.content.split(" ").join(" ").slice(2 + prefix.length);

let copy = "ZEX SHOP";

let request = `Requested By ${message.author.username}`;

if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {

msg.react('✅')

.then(() => msg.react('❌'))

.then(() =>msg.react('✅'))

 

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;

let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

 

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });

let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {

message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));

message.guild.members.forEach(m => {

 

var bc = new

   Discord.RichEmbed()

   .setColor('RANDOM')

   .setTitle('ZEX SHOP')

   .addField('سيرفر', message.guild.name)

   .addField('المرسل', message.author.username)

   .addField('الرسالة', args)

   .setThumbnail(message.author.avatarURL)

   .setFooter(copy, client.user.avatarURL);

m.send({ embed: bc })

msg.delete();

})

})

reaction2.on("collect", r => {

message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));

msg.delete();

})

})

}

});

 

client.on('message', function(msg) {

    const prefix = '+'

    if(msg.content.startsWith (prefix  + 'server')) {

      let embed = new Discord.RichEmbed()

      .setColor('RANDOM')

      .setThumbnail(msg.guild.iconURL)

      .setTitle(`Showing Details Of  **${msg.guild.name}*`)

      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)

      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)

      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)

      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)

      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)

      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)

      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)

      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)

      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())

      msg.channel.send({embed:embed});

    }

  });

 

client.on('message', async message =>{

    if (message.author.boss) return;

      var prefix = "+";

 

  if (!message.content.startsWith(prefix)) return;

      let command = message.content.split(" ")[0];

       command = command.slice(prefix.length);

      let args = message.content.split(" ").slice(1);

      if (command == "mute") {

          if (!message.channel.guild) return;

          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));

          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;

          let user = message.mentions.users.first();

          let muteRole = message.guild.roles.find("name", "Muted");

          if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});

          if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});

          let reason = message.content.split(" ").slice(2).join(" ");

          message.guild.member(user).addRole(muteRole);

          const muteembed = new Discord.RichEmbed()

          .setColor("RANDOM")

          .setAuthor(`Muted!`, user.displayAvatarURL)

          .setThumbnail(user.displayAvatarURL)

          .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)

          .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)

          .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)

          .addField("User", user, true)

          message.channel.send({embed : muteembed});

          var muteembeddm = new Discord.RichEmbed()

          .setAuthor(`Muted!`, user.displayAvatarURL)

          .setDescription(`      

  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين

  ${message.author.tag} تمت معاقبتك بواسطة

