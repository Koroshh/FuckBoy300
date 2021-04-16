const Discord = require("discord.js")
module.exports = {
  name: "kick",
  aliases: ["k"],
  usage: "kick",
  description: "kick user",
  run: async (client, message, args) => {
    if (message.content == '$kick'){
      if (member.hasPermission('KICK_MEMBERS')) {
        console.log('This member can kick');
    }};

}};