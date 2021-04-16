const Discord = require("discord.js")
module.exports = {
  name: "kick",
  aliases: ["k"],
  usage: "kick",
  description: "kick user",
  run: async (client, message, member, msg, args) => {
    
    if (msg.member.hasPermission("KICK_MEMBERS")) {
      if (msg.members.mentions.first()) {
          try {
              msg.members.mentions.first().kick();
          } catch {
              msg.reply("I do not have permissions to kick " + msg.members.mentions.first());
          }
      } else {
          msg.reply("You do not have permissions to kick " + msg.members.mentions.first());
      }
  }

}};