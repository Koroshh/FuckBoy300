const Discord = require('discord.js')
module.exports = {
  name: "pause",
  aliases: ["pa"],
  usage: "pause",
  description: "pause the song!",
  run: async (client, message, args) => {

    var konta = ['bialy','zielony','niebieski','czerwony','pomaranczowy'];

    function rand(range_from,range_to){
	    var r = Math.random();
	    r = r * (range_to-range_from) + range_from;
      return Math.round(r);
    };
    
    var wylosowane_konto = konta[rand(0,konta.length-1)];
    
    const embed = new Discord.MessageEmbed()
	  .setColor('#0099ff')
  	.setTitle('Twoje konto nordvpn')
  	.setAuthor('Alts', 'https://imgur.com/rZTaCPx.png')
    .setDescription(wylosowane_konto)
	  .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/rZTaCPx.png');

    if (message.content === '$leaks') {
      message.author.send(embed);
    }

		
  }
}