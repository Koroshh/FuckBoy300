const Discord = require('discord.js')
module.exports = {
  name: "leaks",
  aliases: ["le"],
  usage: "leaks",
  description: "vpn account",
  run: async (client, message, args) => {

    var konta = new Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20");
    var konto = Math.ceil(Math.random()*konta.length);

    if (message.content === '$leaks') {
        console.log(konta);
      }
  }};