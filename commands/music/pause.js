const Discord = require('discord.js')
module.exports = {
  name: "pause",
  aliases: ["pa"],
  usage: "pause",
  description: "pause the song!",
  run: async (client, message, args) => {

    if (message.content === '$pause') {
      const Embed = new RichEmbed()
              .setTitle("Helper Embed")
              .setColor(0xFF0000)
              .setDescription("Make sure to use the !help to get access to the commands");
      message.author.send(Embed);
    }

		const serverQueue = message.client.queue.get(message.guild.id);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
  }}
}