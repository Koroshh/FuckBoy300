const Discord = require('discord.js')
module.exports = {
  name: "help",
  aliases: ["he"],
  usage: "help",
  description: "help",
  run: async (client, message, args) => {

    const help = new Discord.MessageEmbed()
	  .setColor('#0099ff')
  	.setTitle('FanatykPapieża')
  	.setURL('https://discord.js.org/')
  	.setAuthor('Pomoc', 'https://imgur.com/pmx6yfY.png',      'https://discord.js.org')
  	.addField('Alts to najłatwiejszy sposób na odtwarzanie muzyki na serwerze Discord. Jak narazie współpracuje z YouTube.')
    .addField('Aby rozpocząć, dołącz do kanału głosowego i -play piosenkę. Możesz używać nazw utworów, linków do filmów i linków do playlist.')
	  .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/pmx6yfY.png');

      message.channel.send(help)

  }
}