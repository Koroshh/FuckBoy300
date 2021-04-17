const Discord = require('discord.js')
module.exports = {
  name: "leaks",
  aliases: ["le"],
  usage: "leaks",
  description: "vpn account",
  run: async (client, cmd, member, message, args) => {

    var konta = ['bialy','zielony','niebieski','czerwony','pomaranczowy'];

    function rand(range_from,range_to){
	    var r = Math.random();
	    r = r * (range_to-range_from) + range_from;
      return Math.round(r);
    };
    
    var wylosowane_konto = konta[rand(0,konta.length-1)];
    
  
    if (message.content === `$leaks`) {
      let dUser =
       message.guild.member(message.mentions.users.first()) ||
       message.guild.members.get(args[0]);
      if (!dUser) return message.channel.send("Can't find user!");
      if (!message.member.hasPermission('ADMINISTRATOR'))
       return message.reply("You can't you that command!");
      let dMessage = args.join(' ').slice(22);
      if (dMessage.length < 1) return message.reply('You must supply a message!');
     
      dUser.send(`${dUser} A moderator from WP Coding Club sent you: ${dMessage}`);
     
      message.author.send(
       `${message.author} You have sent your message to ${dUser}`
      );
     }



  }};