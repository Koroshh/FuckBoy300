const Discord = require('discord.js')
module.exports = {
  name: "leaks",
  aliases: ["le"],
  usage: "leaks",
  description: "vpn account",
  run: async (client, message, args) => {

    var tablica = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "?", ":", ";");
    var ilosc=tablica.length;
    a.sort()
    var los=Math.ceil(Math.random()*ilosc);
    if (message.content === '$leaks') {
        console.log(los);
      }
  }};