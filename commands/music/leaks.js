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
    
    
    if (message.content === '$pause') {
    const accounts = new Discord.MessageEmbed()
	    .setColor('#0099ff')
  	  .setTitle('Oto twoje konto nordvpn')
  	  .setAuthor('Alts', 'https://imgur.com/rZTaCPx.png')
      .setDescription(wylosowane_konto)
	    .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/rZTaCPx.png');
      message.author.send(accounts)
    }

  }};