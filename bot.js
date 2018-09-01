const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Logged in as ${client.user.tag}!');
});

let lastRan = 800001;

client.on('message', msg => {
  if (msg .content === "?gen minecraft") {
    sendAlt(msg)

client.on('message', msg => {
  if (msg .content === "?gen fortnite") {
    sendAlt2(msg)

}
});

function sendAlt(fmsg) {
  const now = new Date();
  if (now - lastRan > 5 * 30 * 500) {
      
    var minecraft = [
	"stefan.schrage@googlemail.com:samba257",
	"vincent-herres@gmx.de:Jackhanson1",
	"piotr117@go2.pl:adduser2",
	"mchenault13@gmail.com:emilou13",
	"dean.bailey@wirefish.net:NatTab59",
	"tomshultz@hotmail.com:B1naryd0g",
	"dorimedicalbilling@bex.net:kevin1291",
	"melvin74@orange.fr:Mimi2502",
	"corey.cj.young@gmail.com:Canucks1",
	"apisapia@hotmail.com:Pisapia1",
	"domenic_37@hotmail.com:poxanora1",
	"Odysseus141@hotmail.com:flu8Piak",
	"mobkiller1316@gmail.com:marseilledu13",
	"wslyfly@hotmail.com:Flynhgh73",
	"champi10@hotmail.fr:Warhammer40",
	"pierredecobert@free.fr:pierro23",
	"anail1@tx.rr.com:britany0",
	"louis.tanguay@hotmail.com:milka2001",
	"tntbiatch_047@hotmail.com:Vdm131989",
	"alexandereh93@gmail.com:Dennis123",
	"millerthomas77@gmail.com:leroy1977",
	"parlamer@msn.com:principesa1",
	"jeanolapin31@aliceadsl.fr:polopolo",
	"spawnling@gmail.com:benderrb0y",
	"tonono99@hotmail.es:mariaval2",
	"Isaac.donald@gmail.com:Scooby96",
	"marcolage86@gmail.com:2i4662418",
	"medhi.zerfaoui@hotmail.fr:15081995",
	"viktor__kallgren@hotmail.com:skitsomenget93",
	"tylerbonafe@hotmail.com:Jank8745",
	"florian.reumont@me.com:Mindy123",
	"ag_man1@hotmail.com:jackster001",
	"lalane62300@hotmail.fr:nathalie",
	"dylan.g76@live.fr:dydydu800",
	"blackbankai92@ymail.com:Aizen117",
	"rjlyness@gmail.com:MilkW00d",
	"hammpo@hotmail.co.uk:douglas1234",
	"dana.m.durell@gmail.com:dumont89",
	"Eddie72351@hotmail.com:MTR78nbf",
	"belexof@mail.ru:Tolian12345",
	"sarohpenguin@hotmail.com:Penguini12",
	"mansur_17@hotmail.com:t85s2p3a",
	"ttnuggie@hotmail.com:T3sd45FRQ",
	"aergo@hotmail.co.uk:Cryton01",
	"thomaslaf79@hotmail.com:titine11",
	"pelongo@fuse.net:zil31ler",
	"aut_honey_4ever@hotmail.com:01610350",
	"YingYang118@hotmail.com.au:Otpyrk1993",
	"daniellewrites@gmail.com:tamora44",
	"sudjeanjean@hotmail.fr:jc585858",
	"soundfx85@hotmail.com:Nevermind85",
	"schierle@freenet.de:Stderf",
	"dougcraig@gmail.com:18Br33zy",
	"uclock333@gmail.com:Password556",
	"summonedskull82@gmail.com:Kristina1211",
	"tsalagiwaya@hotmail.com:tacochip1021",
	"ebrunswig@gmail.com:mookie100",
	"mjseleskie@gmail.com:CelticFC1967",
	"vova33omsk@mail.ru:Ghfdj10333",
	"barrytinkler@btinternet.com:Franklin1",
	"unaspi@gmail.com:cetra88",
	"robin.gatti57@yahoo.fr:pastaga",
	"walkingcrow98@gmail.com:breads18",
	"marco.carbognani@yahoo.com:Midsouth7",
	"maksim20011803@mail.ru:7EOSLrtySL",
	"shikobe02@yahoo.com:Getsuga1",
	"mixa258@mail.ua:fiat45678",
	"richiemcconville@hotmail.com:Jack2006",
	"ungur_t@mail.ru:nfyz4528692",
	"mihailbaldin@mail.ru:Qfshvvajq3",
	"berserkmoon@hotmail.com:playboy",
	"Fonga97@gmail.com:nemesy31",
	"simon.dann@live.fr:bretagne",
	"bcwickham@cableone.net:Kuna1010",
	"lanyx_the_warrior@yahoo.com:S01ArF14re",
	"njibynji@gmail.com:13nji12nji11by0",
	"ivan.perez.serrano@gmail.com:marica1990",
	"david_larouche@msn.com:qswaqswa",
	"misha.android.play@gmail.com:91528ts14200262142",
	"no.ken.2013@mail.ru:Fatssasa3",
	"skazkiful@mail.ru:xlkpbwyv3wyv",
	"miika.helin@hotmail.fi:38600lavia",
	"onkelblod@gmail.com:s4Zp8Dmk",
	"mijn9692@hotmail.com:Martini85",
	"sudakov_fedya@mail.ru:52282525su",
	"feppo22@gmail.com:ricardokaka22",
	"zagvozdkin.vlad@mail.ru:3002vz2vlad",
	"admobley10@gmail.com:adm1986",
	"ranadicus@gmail.com:VengeRTHE!1",
	"yurifalco2@live.it:Genesis14",
	"mark_hill182@yahoo.co.uk:barbra182",
	"der1998@bk.ru:Lopol2010",
	"sam.bestalien@hotmail.com:shardlow98",
	"lorcanmclaren@gmail.com:Oscar12797",
	"fender90@gmail.com:Ispassw0rd",
	"slava.nordik10@mail.ru:slavanordik-",
	"danil.1003@mail.ru:misterkvanttv1",
	"spilad@live.it:killer",
	"kleed@live.co.uk:khalid98",
	"maxima.xa@ya.ru:ghbgznm3",
	"lucas.marcon@laposte.net:lulu1102",
	"nikitos-160802@yandex.ru:16082002nik",
	"clement.lalande@gmail.com:chipie01",
	"kkir039@gmail.com:1re358745_",
	"jakeraven86@gmail.com:animekid235",
	"eg.perminow@yandex.ru:qazqaz775",
	"nikos.kokkinis@gmail.com:97011oal",
	"livingridleonsen@gmail.com:Nita1234",
	"sm06@hotmail.it:simone2001",
	"richardrob@hotmail.ca:rusty101",
	"krapivinav9991@gmail.com:Domanoo55",
	"nigakillyou@mail.ru:neyuec123",
	"jason_russell_langley@yahoo.com:Fishtank1",
	"lollipopmaster634@gmail.com:Teoman123",
	"roman02.02@mail.ru:d0303060696",
	"brunorj20@hotmail.com:qwe123bgf",
	"kylayivan@gmail.com:rekftdf269",
	"kenneth3030@hotmail.com:myne3030",
	"peter44phgators@hotmail.com:Vietnam105",
	"istamovvv@mail.ru:dflbv2000",
	"terakidus@gmail.com:SWE559IK19",
	"tikhomipavel@gmail.com:QK5zRY7ckC8s",
	"murtsal2001@gmail.com:M01b02b09",
	"pisano.marko10@gmail.com:megusta10",
	"tmathewchacko@hotmail.com:MMJacob1973",
	"gianluck295@virgilio.it:ronaldo69",
	"silverheart131@live.com:Marcus02",
	"danielkennedy_2000@hotmail.co.uk:stephen07",
	"stec.liza2012@yandex.ru:8332500mM",
	"spencer.semus@gmail.com:160996ss",
	"crazy_sherbert@hotmail.com:Lochness24",
	"dothatstartox@aol.com:alchemy66",
	"jwinters0000@gmail.com:shojix123",
	"nadia-jacson1@hotmail.com:2007Jackson",
	"melaniegirard.madore@gmail.com:JC270820jc",
	"resmaks1@yandex.ru:3907005300Vfrc",
	"silverturtlez22@gmail.com:Lindsey2",
	"louis.ouellet@gmail.com:bouton2235",
	"roman.muraro@gmail.com:53Rr5HA0Y55",
	"xandertetley@hotmail.com:Xandert1",
	"muli.1000@hotmail.com:basmati66",
	"drunkenmaster4201@gmail.com:deusche1",
	"denisok.berman@gmail.com:deonic30012005",
	"hr.arildsen@gmail.com:1331morten",
	"vegard98_kl@hotmail.com:lolmao98",
	"hcookiemonster3@gmail.com:Liverpool73",
	"lange19890@hotmail.de:Micha1989",
	"ilbalordoo@gmail.com:Giorgio99",
	"c4.cookie.c4@gmail.com:Montag007",
	"waxacuna@yahoo.com:joaquin",
	"jetthehawk123@gmail.com:schrag99",
	"bchagen@hotmail.com:Sveinung41",
	"scott.leask@me.com:Cleaver9",
	"samurijordan12@yahoo.com:awesomeman75",
	"math.guillemin@hotmail.fr:Mathieu060902",
	"kutro2@gmx.at:1999lukas",
	"uberamericana01@gmail.com:hades101",
	"willdude1will@aol.com:Bluemen1",
	"lusitan0s@hotmail.fr:P0rtugal",
	"colindunne5@gmail.com:coin2222",
	"josephineebonydanks@gmail.com:Jasper2003",
	"lukemurray@me.com:pizza8",
	"hidoketur@outlook.fr:Hido2002",
	"d4nnyk3lly@hotmail.co.uk:xlr800",
	"jesymiller@gmail.com:musicqueen19",
	"slave2000@gmx.de:4ay73358a",
	"stevenboy1@hotmail.com:Jeoma123",
	"j.ljuboja@gmx.at:prede4ever",
	"adina_mcr@hotmail.com:personlig123",
	"truemoo4@gmail.com:Castle46",
	"richard-kulen1994@hotmail.no:love4ever",
	"s.lebat@free.fr:jeremy",
	"mat.r.d@hotmail.com:ryan19",
	"douggyfresh92@gmail.com:31337man",
	"jitbasep@aim.com:random3",
	"totog@sfr.fr:20102000",
	"bwhipp034@msn.com:Vanessa1013",
	"mh166@webdev-solutions.de:admin071201",
	"videokid30@yahoo.com:Iamepic11",
	"shania1468@hotmail.co.uk:Lollypop23",
	"retrorocket79@gmail.com:Aiden426",
	"celinaweinberger@aol.com:wasser",
	"truongtin13@yahoo.com:zinc2468",
	"benihime_crimsonprincess5@yahoo.com:bleach5",
	"publicenemies100@hotmail.com:Hestheevilone1",
	"syrus64209@comcast.net:060903ev",
	"callwoonga@gmail.com:89613668169m",
	"bigred592@hotmail.com:only4me",
	"riptoc-hells@laposte.net:Azertyuiop0",
	"drkjester31@yahoo.com:ftw!0207",
	"nathanieldday@yahoo.com:5245jail",
	"tja_64@hotmail.com:rolyat11",
	"sbritnell@zebra.com:james1",
	"mostro25@live.it:fenomeno5",
	"odoardi.renaldo@neuf.fr:Shadow1000",


    ]

function sendAlt2(fmsg) {
  const now = new Date();
  if (now - lastRan > 5 * 30 * 500) {
      
    var fortnite = [
    "OUT OF STOCK!",
    "OUT OF STOCK!",
    "OUT OF STOCK!",
    "OUT OF STOCK!",


    
    ]
      
    // It's been more than 5 mins
    var result = Math.floor((Math.random() * accounts.length) + 0);
    fmsg.author.send("KingdomAlts» \n \n Account Credentials: \n " + accounts[result] + " \n \n Alts from HawkGames25#5658 \n \n If ur account is not working please contact our support/staf team. \n \n Arc" );
    
    lastRan = now;
  } else {
    fmsg.channel.send('You have already ran this command! Please wait 5 minutes.')
  }

}

client.login(process.env.NDg0MzczNDk4NDI1MjQ1NzA2.DmxfYg.BG_SGFC3SpRzHD8LgKXcHnFj8OY);
