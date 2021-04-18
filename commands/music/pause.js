const Discord = require('discord.js')
module.exports = {
  name: "pause",
  aliases: ["pa"],
  usage: "pause",
  description: "pause the song!",
  run: async (client, message, args) => {

    if (message.content === '$pause') {
      const help = new Discord.MessageEmbed()
	  .setColor('#0099ff')
  	.setTitle('Pomoc')
  	.setAuthor('Alts', 'https://imgur.com/rZTaCPx.png')
    .setDescription('Alts to najłatwiejszy sposób na odtwarzanie muzyki na serwerze Discord. Jak narazie współpracuje z YouTube. Aby rozpocząć, dołącz do kanału głosowego i $play <link>. Możesz używać inków do piosenek. Chcesz sprawdzić jakie mam komendy? Polecam $commands.' )
	  .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/rZTaCPx.png');
      message.author.send(help);
    }

		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
  }}
}