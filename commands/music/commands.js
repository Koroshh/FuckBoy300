const Discord = require('discord.js')
module.exports = {
  name: "commands",
  aliases: ["co"],
  usage: "commands",
  description: "commands",
  run: async (client, message, args) => {

    const help = new Discord.MessageEmbed()
	  .setColor('#0099ff')
  	.setTitle('Komendy')
  	.setURL('https://imgur.com/rZTaCPx.png')
  	.setAuthor('Komendy', 'https://imgur.com/rZTaCPx.png','https://imgur.com/rZTaCPx.png')
  	.setDescription('Moje komendy możesz sprawdzić pod tym linkiem.')
	  .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/rZTaCPx.png');

    message.channel.send(help)

  }
}