const Discord = require('discord.js')
module.exports = {
  name: "help",
  aliases: ["he"],
  usage: "help",
  description: "help",
  run: async (client, message, args) => {

    const help = new Discord.MessageEmbed()
	  .setColor('#0099ff')
  	.setTitle('Pomoc')
  	.setAuthor('Alts', 'https://imgur.com/rZTaCPx.png')
  	.setDescription('Alts to najłatwiejszy sposób na odtwarzanie muzyki na serwerze Discord. Jak narazie współpracuje z YouTube.' ,)
    .setDescription('Aby rozpocząć, dołącz do kanału głosowego i $play piosenkę. Możesz używać nazw utworów, linków do filmów i linków do playlist.', 'Chcesz sprawdzić jakie mam komendy? Polecam $commends 😏' )
	  .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/rZTaCPx.png');

    message.channel.send(help)

  }
}