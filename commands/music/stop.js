const Discord = require("discord.js")
module.exports = {
  name: "stop",
  aliases: ["s"],
  usage: "stop",
  description: "stop a song",
  run: async (client, message, args) => {

    
    const embed1 = new Discord.MessageEmbed()
    .setDescription("Musisz być na kanale głosowym")
    .setColor("RED")

		const { channel } = message.member.voice;
		if (!channel) return message.channel.send(embed1);
		const serverQueue = message.client.queue.get(message.guild.id);
    const embed2 = new Discord.MessageEmbed()
    .setDescription("Nie ma nic, co mógłbym dla ciebie zatrzymać.")
    .setColor("RED")
		if (!serverQueue) return message.channel.send(embed2);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('');

const stopped = new Discord.MessageEmbed()
		.setColor('#0099ff')
    .setDescription("Muzyka została zatrzymana!")

message.channel.send(stopped)

  }
}