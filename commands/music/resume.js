const Discord = require('discord.js')
module.exports = {
  name: "resume",
  aliases: ["r"],
  usage: "resume",
  description: "resume the song!",
  run: async (client, message, args) => {


    const embed1 = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription("▶ Zatrzymałam dla ciebie!")

		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send(embed1);
		}

    const embed2 = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription("Aktualnie nic nie gra")
		return message.channel.send(embed2);


  }
}