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
  	.setURL('https://discord.js.org/')
  	.setAuthor('Komendy', 'https://imgur.com/pmx6yfY.png',      'https://discord.js.org')
  	.setDescription('Lista komend')
	  .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/pmx6yfY.png');

      message.channel.send(help)

  }
}