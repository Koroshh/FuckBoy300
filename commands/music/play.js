const { Util } = require('discord.js');
const ytdl = require('ytdl-core');

const Discord = require('discord.js');

module.exports = {
  name: "play",
  aliases: ["pl"],
  usage: "play <song>",
  description: "play a song",
  run: async (client, message, args) => {
    
    if (message.content === '$play'){
		if (!args.length) return message.channel.send('You need to send the second argument!');
		let song = {};

		//If the first argument is a link. Set the song object to have two keys. Title and URl.
		if (ytdl.validateURL(args[0])) {
			const song_info = await ytdl.getInfo(args[0]);
			song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
		} else {
			//If there was no link, we use keywords to search for a video. Set the song object to have two keys. Title and URl.
			const video_finder = async (query) =>{
				const video_result = await ytSearch(query);
				return (video_result.videos.length > 1) ? video_result.videos[0] : null;
			}

			const video = await video_finder(args.join(' '));
			if (video){
				song = { title: video.title, url: video.url }
			} else {
				 message.channel.send('Error finding video.');
			}
		}

		//If the server queue does not exist (which doesn't for the first video queued) then create a constructor to be added to our global queue.
		if (!server_queue){

			const queue_constructor = {
				voice_channel: voice_channel,
				text_channel: message.channel,
				connection: null,
				songs: []
			}
			
			//Add our key and value pair into the global queue. We then use this to get our server queue.
			queue.set(message.guild.id, queue_constructor);
			queue_constructor.songs.push(song);

			//Establish a connection and play the song with the vide_player function.
			try {
				const connection = await voice_channel.join();
				queue_constructor.connection = connection;
				video_player(message.guild, queue_constructor.songs[0]);
			} catch (err) {
				queue.delete(message.guild.id);
				message.channel.send('There was an error connecting!');
				throw err;
			}
		} else{
			server_queue.songs.push(song);
			return message.channel.send(`👍 **${song.title}** added to queue!`);
		}
	}
	}
};


