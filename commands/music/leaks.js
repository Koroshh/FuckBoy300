const Discord = require('discord.js')
module.exports = {
  name: "leaks",
  aliases: ["le"],
  usage: "leaks",
  description: "vpn account",
  run: async (client, message, args) => {

    var kolory = ['bialy','zielony','niebieski','czerwony','pomaranczowy'];

    function rand(range_from,range_to){
	    var r = Math.random();
	    r = r * (range_to-range_from) + range_from;
      return Math.round(r);
  };
  var wylosowany_kolor = kolory[rand(0,kolory.length-1)];
  if(message.content == $leaks){
    message.channel.send(wylosowany_kolor);
  };
  }};