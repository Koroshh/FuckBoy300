const Discord = require('discord.js')
module.exports = {
  name: "vpn",
  aliases: ["vpn"],
  usage: "vpn",
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
    'alzubaidi1998@gmail.com:1qaswe32 | Expiry = 2021-12-30 |',
    'samybishay@gmail.com:qwertyui | Expiry = 2021-12-30 |',
    'nihonjatdark@gmail.com:papermario99 | Expiry = 2021-12-27 | ',
    'georgema140@gmail.com:25212c92B | Expiry = 2021-12-26 | ',
    'mpapka@magellanhealth.com:Collinmp1 | Expiry = 2021-12-26 | ',
    'eric.chase24@icloud.com:Huskies56 | Expiry = 2021-12-24 | ',
    'scytherx1986@hotmail.com:things123 | Expiry = 2021-12-24 | ',
    'crvalentine@hotmail.com:Eaglegirl1 | Expiry = 2021-12-23 | ',
    'madou03@hotmail.fr:popole03 | Expiry = 2021-12-22 | ',
    'sonofgiants04@gmail.com:sarcar05 | Expiry = 2021-12-22 | ',
    'taylorpauljones@gmail.com:zyp2Gj61! | Expiry = 2021-12-22 |',
    'zayne.zm@gmail.com:Trim56zm | Expiry = 2021-12-20 | ',
    'wagmankatherine@gmail.com:Kate3339 | Expiry = 2021-12-20 |',
    'jayscott@iinet.net.au:Jayjay23 | Expiry = 2021-12-20 | ',
    'jr2387@gmail.com:123213Nba | Expiry = 2021-12-19 | ',
    'hummad.ijaz@gmail.com:3dayslinkin | Expiry = 2021-12-19 | ',
    'falloutfred1666@gmail.com:zombies1 | Expiry = 2021-12-16 |',
    'martin.morrison80@googlemail.com:Alyssamai1 | Expiry = 2021-12-15 | ',
    'joplin333@me.com:Waltherp5 | Expiry = 2021-12-15 | ',
    'kartikeyakalani@gmail.com:Kartikeya1 | Expiry = 2021-12-14 | ',
    'tylec2@gmail.com:Redlinemiddies2 | Expiry = 2021-12-13 |',
    'thundergiant9000@gmail.com:tawtaws2004 | Expiry = 2021-12-13 | ',
    'kdstevens@live.com:Hitman00 | Expiry = 2021-12-12 |',
    'dfrey.frey@gmail.com:Senegal00 | Expiry = 2021-12-12 | ',
    'cornelltwilla911@yahoo.com:Thurso911 | Expiry = 2021-12-12 | ',
    'william.heng2000@gmail.com:Heng20061967 | Expiry = 2021-12-10 |',
    'katrinehauck@gmail.com:Tristan12 | Expiry = 2021-12-08 | ',
    'kmooney3739@gmail.com:Kieran00 | Expiry = 2021-12-07 | ',
    'kennywcm@hotmail.co.uk:Kennyobito1 | Expiry = 2021-12-07 |',
    'kcberry1129@gmail.com:Steelers29 | Expiry = 2021-12-06 |',
    'justin74778@hotmail.com:Prowler101 | Expiry = 2021-12-05 |',
    'jwatt0918@hotmail.com:A1s2d3f4 | Expiry = 2021-12-03 |',
    'nunesgm@hotmail.com:Gil123berto! | Expiry = 2021-12-03 |',
    'jugraj1993@hotmail.com:H3ifdg5. | Expiry = 2021-12-02 | ',
    'alilbit49@hotmail.com:5grandkids | Expiry = 2021-12-01 |',
    ];

    function rand(range_from,range_to){
	    var r = Math.random();
	    r = r * (range_to-range_from) + range_from;
      return Math.round(r);
    };
    
    var wylosowane_konto = konta[rand(0,konta.length-1)];
    
    const embed = new Discord.MessageEmbed()
	  .setColor('#0099ff')
  	.setTitle('Twoje konto Nordvpn')
  	.setAuthor('Alts', 'https://imgur.com/rZTaCPx.png')
    .setDescription(wylosowane_konto)
	  .setFooter('Autorem bota jest blaszkaaa#8802', 'https://imgur.com/rZTaCPx.png');
    
    const MOD = message.member;
    
    if (message.content === '$vpn') {
      if (MOD.hasPermission('KICK_MEMBERS')){
          message.author.send(embed);
          message.react('✔');
        }
        else{
          message.reply('Nie masz uprawnien do tej komendy');
          message.react('❌');
      }
    }
  }
}