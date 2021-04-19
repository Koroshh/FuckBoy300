const Discord = require('discord.js')
module.exports = {
  name: "leaks",
  aliases: ["leaks"],
  usage: "leaks",
  description: "account nordvpn",
  run: async (client, message, member, msg, args) => {

    var konta = [
    'williamjbradford@yahoo.com:Namleps827 | Expiry = 2023-03-04 |',
    'ame68@msn.com:Acme1968 | Expiry = 2024-02-17 |',
    'paradoxy@telus.net:enigma666 | Expiry = 2023-07-07 |',
    'imironvasile@yahoo.com:miron2112 | Expiry = 2023-03-02 |',
    'ztniles@gmail.com:Hugh514! | Expiry = 2022-12-01 |',
    'tonyblayk@gmail.com:zinny123 | Expiry = 2022-12-01 |',
    'tokolight629@gmail.com:698543210aA | Expiry = 2022-10-10 |',
    'nathanmontone@gmail.com:Wintbr!100 | Expiry = 2022-07-04 |',
    'taffjensen@gmail.com:Orion528 | Expiry = 2022-05-11 |',
    'ahmed.alali@gmail.com:Valbuena1 | Expiry = 2022-03-04 |',
    'kl.20@hotmail.com:smile123 | Expiry = 2022-02-26 |',
    'alisonangst@icloud.com:Den22Dzksk | Expiry = 2022-02-11 |',
    'raiders.rock36@hotmail.com:Cougar#23 | Expiry = 2022-01-18 |',
    'rayquons740@outlook.com:shadow740 | Expiry = 2022-01-11 |',
    'lindsay.scott95@gmail.com:122795linz | Expiry = 2022-01-03 |',
    'miltonmrtnz@yahoo.com:oropel38 | Expiry = 2022-01-02 |',
    'red19fan@gmail.com:Firdies1 | Expiry = 2022-01-02 |',
    'mercury1331@hotmail.com:IloveGuns133 | Expiry = 2022-01-01 |',
    'mr.madscientist314@hotmail.com:3.141592654 | Expiry = 2021-12-31 |',
    'lilim20006@hotmail.com:Jolili876 | Expiry = 2021-12-30 |',
    ];

    function rand(range_from,range_to){
	    var r = Math.random();
	    r = r * (range_to-range_from) + range_from;
      return Math.round(r);
    };
    
    var wylosowane_konto = konta[rand(0,konta.length-1)];
    
    const embed = new Discord.MessageEmbed()
	  .setColor('#0099ff')
  	.setTitle('Twoje konto nordvpn')
  	.setAuthor('Alts', 'https://imgur.com/rZTaCPx.png')
    .setDescription(wylosowane_konto)
	  .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/rZTaCPx.png');

    if (message.content === '$leaks') {
      if (member.hasPermission('KICK_MEMBERS'))
          message.author.send(embed);
          else;
          msg.reply('Nie masz uprawnien do tej komendy');
    }
  }
}