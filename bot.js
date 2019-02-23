const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "BR-";
try {
  require("./localstorage.json");
} catch (e) {
  fs.writeFileSync('localstorage.json', '{\n\n}', function (err) {
      if (err) throw err;
  });
}

client.on('ready', () => {
  console.log(`Logged in as : ${client.user.tag}!`);
   client.user.setActivity("Welcome To Brmoon Server",{type: 'WATCHING'})
   client.user.setStatus("dnd")
});

client.on("guildMemberAdd", m => { 
  let room = m.guild.channels.find(a => a.name === 'whme'); 
      if (datediff(parseDate(moment(m.user.createdTimestamp).format('l')), parseDate(moment().format('l'))) < 30) {
      m.ban() .then(( /////////////// Galal , ALPHA CODES
          room.send(`**Fake Account Banned ${m}**`)
      ))
  }; /////////////// Galal , ALPHA CODES
  function parseDate(str) {
      var mdy = str.split('/'); /////////////// Galal , ALPHA CODES
      return new Date(mdy[2], mdy[0]-1, mdy[1]); /////////////// Galal , ALPHA CODES
  }; /////////////// Galal , ALPHA CODES
  
  function datediff(first, second) { /////////////// Galal , ALPHA CODES
      return Math.round((second-first)/(1000*60*60*24));
  };
  }); /////////////// Galal , ALPHA CODES

client.login(process.env.BOT_TOKEN);

client.on('guildMemberAdd', (member) => {
 member.addRole(member.guild.roles.find('name', '✢ | Brmoon Member'));
});

client.on("message", message => {
  if(message.content.startsWith(prefix + "ban")){
   const BanA = message.content.split(" ").slice(1)
  if(!BanA) return message.reply("**Please, Mention Member | :x:**")
   const BanE = new Discord.RichEmbed()
   .setTitle("Banned!")
   .setDescription(`User ${BanA} Banned!`)
   .setFooter("Brmoon System")
   message.channel.sendEmbed(BanE)
   message.guild.member(BanA).ban();
  }
})

client.on("message", message => {
  if(message.content.startsWith(prefix + "kick")){
   const KickA = message.content.split(" ").slice(1)
  if(!KickA) return message.reply("**Please, Mention Member | :x:**")
   const KickE = new Discord.RichEmbed()
   .setTitle("Kicked!")
   .setDescription(`User ${BanA} Kicked!`)
   .setFooter("Brmoon System")
   message.channel.sendEmbed(KickE)
   message.guild.member(KickA).kick();
  }
})

client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
    if(!msg.startsWith(prefix + 'role') ) return;
    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**Bot Need ``ADMINISTRATOR`` | :x:**");
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Need ``ADMINISTRATOR`` | :x:**');
	if( msg.toLowerCase().startsWith( prefix +'unrole' ) ){
        if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**Bot Need ``ADMINISTRATOR`` | :x:**");
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Need ``ADMINISTRATOR`` | :x:**');
		if( !args[0] ) return message.reply('**Mention First | :x:**');
		if( !args[1] ) return message.reply('**Role Second | :x:**');
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply('**Role Second | :x:**');if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply(`**Done UnRole ${args} | :white_check_Mark:**`);
		}
		if( args[0].toLowerCase() == "all" ){
            if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**Bot Need ``ADMINISTRATOR`` | :x:**");
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Need ``ADMINISTRATOR`` | :x:**');
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**Done unRole All** | :white_check_mark:');
		} else if( args[0].toLowerCase() == "bots" ){
            if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**Bot Need ``ADMINISTRATOR`` | :x:**");
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Need ``ADMINISTRATOR`` | :x:**');
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**Done unRole Bots | :x:**');
		} else if( args[0].toLowerCase() == "humans" ){
            if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**Bot Need ``ADMINISTRATOR`` | :x:**");
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Need ``ADMINISTRATOR`` | :x:**');
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**Done unRole all Humans** | :white_check_mark:');
		} 	
	} else {
		if( !args[0] ) return message.reply('**Mention First | :x:**');
		if( !args[1] ) return message.reply('**Role Second | :x:**');
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply('**Role Second | :x:**');if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply(`**Done unRole ${args}**`);
		}
		if( args[0].toLowerCase() == "all" ){
			  if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("**Bot Need  ``ADMINISTRATOR`` | :x:**");
if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Need ``ADMINISTRATOR`` | :x:**');
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**[ '+role1.name+' ] **');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**Done Gave Bots Role****');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**Done Gave Human Role**');
		} 
	} 
});

client.on('message',async message => {
  if(message.content.startsWith(prefix + "setVoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('**You Need ``MANAGE_CHANNELS`` | :x:**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('**Bot Need ``MANAGE_CHANNELS`` | :x:**');
  message.channel.send('**Done** | :white_check_mark:');
  message.guild.createChannel(`-˙Voice Online˙: ${message.guild.members.filter(m => m.voiceChannel).size}` , 'voice').then(c => {
    console.log(`Voice online channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`-˙Voice Online˙: ${message.guild.members.filter(m => m.voiceChannel).size}`)
    },1000);
  });
  }
});

client.on('message', message => {
  if (message.author.id === client.user.id) return;
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  message.channel.send(`**تم التسليم الي [\`${message.guild.memberCount}\`] عضو | :white_check_mark**`); 
  if (!args[1]) {
return;
}
      message.guild.members.forEach(m => {
               if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  var bc = new Discord.RichEmbed()
    .setTitle("New BoardCast")
    .addField('» Sender :thinking:', message.author.username)
          .addField('» Message :pencil:', args)
          .setColor('#ff0000')
          // m.send(`[${m}]`);
          m.send(`${m}`,{embed: bc});
      });
  }
  } else {
      return;
  }
});


var db = JSON.parse(fs.readFileSync("./localstorage.json", 'utf8'));

client.on("message", async function(msg) {
  if (msg.author.bot) return undefined;
  if (msg.channel.type !== "text") return undefined;
  else {

      await fs.readFileSync("./localstorage.json", 'utf8');

      if (!db[msg.author.id]) db[msg.author.id] = {
          credits : 0,
          messages : 0,
      };
      db[msg.author.id].messages+=1;
      if (db[msg.author.id].messages == 5) {
          db[msg.author.id].credits = db[msg.author.id].credits+Math.floor(Math.random() * 5) +1;
          db[msg.author.id].messages = db[msg.author.id].messages = 0;
      } // L#7574
      fs.writeFile("./localstorage.json", JSON.stringify(db), function(err) {
          if (err) throw err;
      });
      var args = msg.content.toLowerCase().split(" ");
      var mention = msg.mentions.users.first() || client.users.get(msg.content.split(" ")[1]) || msg.author;

      if (args[0].slice(prefix.length) === "blance" || args[0].slice(prefix.length) === "credit" || args[0].slice(prefix.length) === "credits") {
          if (!db[mention.id]) db[mention.id] = {
              credits : 0,
              messages : 0,
          };
          if (mention.id == msg.author.id) {
              word = "You";
          } else {
              word = `${mention}'s`;
          }// L#7574
          if (db[mention.id].credits <= 0) return msg.channel.send(`${word}`);
          if (db[mention.id].credits > 0 && db[mention.id].credits !== 0) return msg.channel.send(`**${word}, Have Credits ${db[mention.id].credits} | :credit_card**`);
      } else if (args[0].slice(prefix.length) === "transfer") {
          if (!db[msg.author.id]) db[msg.author.id] = {
                  credits : 0,
                  messages: 0,
              }
          if (!db[mention.id]) {
              db[mention.id] = {
                  credits : 0,
                  messages : 0,
              }
          }
          if (isNaN(args[2]) || !args[2] || !mention || isNaN(args[2]) && !args[2] && !mention) return msg.channel.send(`**Please Mention Member | :x:**`)
          else {
              if (db[msg.author.id].credits <= 0 && db[msg.author.id].credits <= args[2]) {
                  return msg.channel.send(`***You Dont Have Enough Credit To transfer | :x:**`)
              }
              else {
                  db[msg.author.id].credits-=parseInt(args[2])
                  db[mention.id].credits+=parseInt(args[2])
                  return msg.channel.send(`${mention}, Have ${db[mention.id].credits} Credits | :credit_card`)
              }
          }
      }
  }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  let args = msg.content.split(" ").slice(1);

    if(msg.content.startsWith(prefix + 'clear')) {
    let textxt = args.slice(0).join("");
	console.log(`${msg.author.username} Has Ran Clear Command`)
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == ""){ return msg.channel.bulkDelete(50).then (msg.channel.send("**Done Delete Messages | :white_check_mark:**"))
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("**Done Delete Messages | :white_check_mark:**").then(m => m.delete(3000));
        }    
    }
}
});

client.login("Ab7Star_YT")
