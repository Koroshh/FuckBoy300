const config = require('./config.json')
const Discord = require('discord.js')
const Client = new Discord.Client()
const db = require('quick.db')
const fs = require('fs')
Client.commands = new Discord.Collection();
Client.aliases = new Discord.Collection();
const DisTube = require('distube')




Client.distube = new DisTube(Client, { searchSongs: false, emitNewSongOnly: false });

Client.distube

.on("playSong", (message, queue, song) => {
    let playingEmbed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`🎵 Now Playing 🎵`)
    .setDescription(`[**${song.name} - ${song.formattedDuration}**](${song.url})`)
    .setFooter(`Requested by ${song.user.tag}`)
    message.channel.send(playingEmbed)
})
.on("addSong", (message, queue, song) => {
    let queueEmbed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`✅ Added to the Queue ✅`)
    .setDescription(`[**${song.name} - ${song.formattedDuration}**](${song.url})`)
    .setFooter(`Requested by ${song.user.tag}`)
    message.channel.send(queueEmbed)
})
.on("playList", (message, queue, playlist, song) => {

    message.channel.send(`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\``)
})
.on("addList", (message, queue, playlist) => message.channel.send(
    `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue`
))
// DisTubeOptions.searchSongs = true
.on("searchResult", (message, result) => {
    let i = 0;
    message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
})
// DisTubeOptions.searchSongs = true
.on("searchCancel", (message) => message.channel.send(`**Searching canceled!**`))
.on("error", (message, e) => {
    console.error(e)
    message.channel.send("An error encountered: " + e);
});
