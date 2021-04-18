const {Client, RichEmbed} = require('discord.js');
const bot = new Client();
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
    
    PREFIX = '$';
    
    bot.on('message', message => {
      let args = message.content.substring(PREFIX.length).split(" ");
      switch (args[0]) { 
          case 'leaks':
              const Embed = new RichEmbed()
              .setTitle("Helper Embed")
              .setColor(0xFF0000)
              .setDescription("Make sure to use the !help to get access to the commands");
              message.author.send(Embed);
          break;
      }
   
   
  });



  }};