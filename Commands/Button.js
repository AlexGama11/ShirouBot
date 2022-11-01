const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction, GuildMemberRoleManager, MessageActionRow, MessageButton } = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const wait = require('util').promisify(setTimeout);
const cooldown = new Set();
const dotenv = require('dotenv').config();

module.exports =
{
	async execute(interaction) {
        
        const cooldownTime = 20000;

        const buttonMaker = interaction.user.id;

        if (cooldown.has(interaction.user)) {
			interaction.reply({ ephemeral: true, content: 'The command has a cooldown of 20 seconds!' });

			//console.log(cooldown.user.username, cooldownTime);
		}

		else {

		if (interaction.guild.id == '1017827846011490404') {
		const guildMember = interaction.member;
		const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

		const buttonEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle('Button')
			.setDescription('Button')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.setFooter(`${interaction.user.username} asked for Buttons`, avatar, true)
			.setTimestamp();

		// ================================================================================================================================//


		const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('honk')
					.setLabel('Honk')
					.setStyle('PRIMARY'),
            )

            .addComponents(
                new MessageButton()
				.setCustomId('kanye')
				.setLabel('Kanye')
				.setStyle('PRIMARY'),
			)
            
            .addComponents(
                new MessageButton()
					.setCustomId('lovelive')
					.setLabel('LoveLive')
					.setStyle('PRIMARY'),
            );

		await interaction.reply({ ephemeral: false, embeds: [buttonEmbed], components: [button] });

        cooldown.add(interaction.user);

		setTimeout(() => {cooldown.delete(interaction.user);}, cooldownTime);

		//console.log(cooldown, cooldownTime);

		// const filter = i => i.user.id === interaction.user.id;

		const collector = interaction.channel.createMessageComponentCollector({ /* filter, */time: 20000 });

		collector.on('collect', async (i) => {
			i.deferUpdate();
			switch (i.customId) {
			case 'honk':

				const honk = [
					'https://tenor.com/view/honoka-gif-5514846',
					'https://tenor.com/view/honoka-gif-5514840',
					'https://tenor.com/view/honoka-kosaka-love-live-dance-gif-22348813',
					'https://tenor.com/view/honoka-kousaka-gif-19672583',
					'https://tenor.com/view/honoka-love-live-eating-mad-gif-5514850',
					'https://tenor.com/view/honoka-pillow-fight-anime-scared-gif-5514851',
					'https://tenor.com/view/honoka-gif-21580223',
					'https://tenor.com/view/honoka-love-live-gif-5514854',
					'https://tenor.com/view/honoka-gif-5514842',
					'https://tenor.com/view/honoka-kosaka-love-live-happy-gif-22348826',
					'https://tenor.com/view/honoka-kousaka-honoka-love-live-sifas-sif-gif-20280850',
					'https://tenor.com/view/honoka-kousaka-love-live-honoka-kosaka-kin-kinnie-gif-19147982',
					'https://tenor.com/view/honoka-anime-gif-5514844',
					'https://tenor.com/view/dragon-ball-z-rule-rule9900-honoka-kousaka-goku-gif-25691432',
					'https://tenor.com/view/honoka-love-live-anime-heart-gif-5514847',
					'https://tenor.com/view/honoka-kousaka-love-live-maid-gif-19659515',
					'https://tenor.com/view/honoka-kousaka-honk-love-live-sifas-flossing-gif-20504552',
					'https://tenor.com/view/love-live-honoka-kosaka-clapping-clap-good-job-gif-11917791',
					'https://tenor.com/view/honoka-kousaka-love-live-anime-nom-eats-bread-gif-12075787',
					'https://tenor.com/view/honoka-kousaka-gif-24723595',
					'https://tenor.com/view/honoka-kousaka-gif-24370324',
					'https://tenor.com/view/pensive-serious-uhoh-silent-thinking-gif-11846590',
					'https://tenor.com/view/lets-goo-honoka-kousaka-gif-23293886',
					'https://tenor.com/view/honoka-gif-5514853',
					'https://tenor.com/view/honoka-love-live-anime-frown-gif-5514849',
					'https://tenor.com/view/anime-happy-nuzzle-gif-19699344',
					'https://tenor.com/view/kosaka-honoka-love-live-move-arms-i-want-that-gif-17365872',
					// images here
					  ];

					  const honkValue = Math.floor(Math.random() * honk.length);
					  const honkImage = honk[honkValue]; // Gives us the random image.
					
                        if (i.user.id === buttonMaker) {
                            await interaction.editReply({ ephemeral: true, content: `Honk \n ${honkImage}`, embeds: [], components: []  });
                         }
     
                         else {
                             await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
                         }                     

				break;

            case 'kanye':
				let kanyeimages = [
					'https://tenor.com/view/kanye-sus-gif-21106687',
					'https://tenor.com/view/kanye-west-kanye-fast-moving-fast-gif-17781564',
					'https://tenor.com/view/kanye-kanye-west-funny-talking-gif-15547581',
					'https://tenor.com/view/kanye-west-kanye-west-stare-kanye-memes-webcam-gif-19811474',
					'https://tenor.com/view/yezzy-kanye-gif-25238066',
					'https://tenor.com/view/kanye-west-kanye-funny-lol-qwonty-gif-23031339',
					'https://tenor.com/view/kanye-west-kanye-no-gif-22568295',
					'https://tenor.com/view/kanye-kanye-west-kanye-mad-marti-xmellow-gif-22988712',
					'https://tenor.com/view/kanye-kanye-west-no-drink-champs-ye-gif-23684736',
					'https://tenor.com/view/bruh-gpo-bad-trade-nty-bro-gif-24142673',
					'https://tenor.com/view/kanye-kanye-taylor-taylor-swift-imma-let-you-finish-kanye-imma-let-you-gif-19373508',
					'https://tenor.com/view/kanye-south-kanye-east-kanye-west-kanye-north-kanye-gif-18581005',
					'https://tenor.com/view/kanye-west-donda-donda-chant-kanye-album-kanye-dance-gif-22884498',
					'https://tenor.com/view/kanye-ostinka-gif-22635178',
					'https://tenor.com/view/kanye-north-kanye-east-kanye-south-kanye-ifunny-gif-18580980',
					'https://tenor.com/view/kanye-west-king-gif-24584158',
					'https://tenor.com/view/kanye-west-blink-blinking-gif-15386085',
					'https://tenor.com/view/kanye-a-god-i-am-a-god-kanye-west-conceited-gif-5313292',
					'https://tenor.com/view/kanye-kanye-west-roblox-kayne-ratgifz-nervous-kanye-gif-14908888',
					'https://tenor.com/view/best-im-the-gif-23675766',
					'https://tenor.com/view/kanye-approves-kanye-west-applause-clapping-clap-gif-5848263',
					'https://tenor.com/view/kanye-west-te-yesterday-kim-kardashian-smile-gif-11985832',
					'https://tenor.com/view/kanye-west-no-smile-serious-mood-gif-15523762',
					'https://tenor.com/view/i-have-hired-kanye-to-stare-at-you-kanye-west-kanye-staring-kanye-stare-staring-gif-21813366',
					'https://tenor.com/view/kawaii-kanye-west-gif-22279829',
					'https://tenor.com/view/kanye-meme-troll-gif-23450530',
					'https://tenor.com/view/kanye-west-blink-blinking-eyes-attitude-gif-16548735',
					'https://tenor.com/view/kanye-west-gif-23414217',
					'https://tenor.com/view/kanye-west-stare-staring-funny-gif-13590085',
					'https://tenor.com/view/gif-gif-19493692',
					// images here
					];

					  let kanyerandomValue = Math.floor(Math.random() * kanyeimages.length); // Gets a random value from the array's length
					  let kanyeimage = kanyeimages[kanyerandomValue]; // Gives us the random image.

                      if (i.user.id === buttonMaker) {
						await interaction.editReply({ ephemeral: true, content: `Kanye \n ${kanyeimage}`, embeds: [], components: []   });
					}

					else {
						await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
					}

				break;

            case 'lovelive':
				let images = [
					'https://tenor.com/view/sumire-heanna-love-live-superstar-love-live-liella-sumire-gif-22570668',
					'https://tenor.com/view/love-live-puchiguru-aqours-muse-gay-gif-20181243',
					'https://tenor.com/view/nico-yazawa-nico-nico-nii-spooky-jumpscare-meme-gif-23628014',
					'https://tenor.com/view/love-live-me-and-oomfie-oomfie-emma-rina-gif-25343404',
					'https://tenor.com/view/cunny-i-love-love-cunny-cunny-cunny-cunny-cute-gif-24196826',
					'https://tenor.com/view/nico-yazawa-love-live-sifas-love-live-allstars-gif-20181138',
					'https://tenor.com/view/nozomi-nico-honoka-kotori-maki-gif-25549509',
					'https://tenor.com/view/gangnam-style-love-live-setsuna-setsuna-yuki-love-live-nijigasaki-gif-23649678',
					'https://tenor.com/view/liella-love-live-sumire-keke-keke-tang-gif-23790793',
					'https://tenor.com/view/dragon-ball-z-rule-rule9900-honoka-kousaka-goku-gif-25691432',
					'https://tenor.com/view/honoka-kosaka-love-live-happy-gif-22348826',
					// images here
					  ];

					  let randomValue = Math.floor(Math.random() * images.length); // Gets a random value from the array's length
					  let image = images[randomValue]; // Gives us the random image.

                        if (i.user.id === buttonMaker) {
                            await interaction.editReply({ ephemeral: true, content: `Love Live \n ${image}`, embeds: [], components: []   });
                        }
    
                        else {
                            await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
                        }
				break;
			}


		});

		collector.on('end', (collected) => console.log(`Collected ${collected.size} items`));

    }
	else {
		const guildMember = interaction.member;
		const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

		const buttonEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle('Button')
			.setDescription('Button')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.setFooter(`${interaction.user.username} asked for Buttons`, avatar, true)
			.setTimestamp();

		// ================================================================================================================================//


		const button = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('honk')
					.setLabel('Honk')
					.setStyle('PRIMARY'),
            )

            .addComponents(
                new MessageButton()
				.setCustomId('kanye')
				.setLabel('Kanye')
				.setStyle('PRIMARY'),
			)
            
            .addComponents(
                new MessageButton()
					.setCustomId('lovelive')
					.setLabel('LoveLive')
					.setStyle('PRIMARY'),
            );

		await interaction.reply({ ephemeral: false, embeds: [buttonEmbed], components: [button] });

        cooldown.add(interaction.user);

		setTimeout(() => {cooldown.delete(interaction.user);}, cooldownTime);

		//console.log(cooldown, cooldownTime);

		// const filter = i => i.user.id === interaction.user.id;

		const collector = interaction.channel.createMessageComponentCollector({ /* filter, */time: 20000 });

		collector.on('collect', async (i) => {
			i.deferUpdate();
			switch (i.customId) {
			case 'honk':
				const queen = [
					'https://tenor.com/view/queen-queen-elizabeth-queenelizabeth-ii-elizabeth-elizabeth-ii-gif-24190405',
					'https://tenor.com/view/queen-elizabeth-the-second-queen-elizabeth-england-canada-canadian-gif-17900765',
					'https://tenor.com/view/the-queen-lol-queen-elizabeth-middle-finger-gif-12215194',
					'https://tenor.com/view/royals-monarchy-royalty-british-royals-british-royalty-gif-23402123',
					'https://tenor.com/view/elizabeth-elizabeth-ii-queen-elizabeth-queen-elizabeth-ii-queen-elizabeth2-gif-24270912',
					'https://tenor.com/view/queen-of-england-queen-elizabeth-ii-elizabeth-ii-purple-elizabeth-ii-purple-queen-gif-20671433',
					'https://tenor.com/view/queen-elizabeth-eyes-look-around-gif-22947196',
					'https://tenor.com/view/queen-elizabeth-queen-elizabeth-elizabeth-ii-queen-elizabeth-ii-gif-23212224',
					'https://cdn.discordapp.com/attachments/936218584097644556/978684706805649408/unknown.png?size=4096',
					'https://cdn.discordapp.com/attachments/936218584097644556/978684745078681670/unknown.png?size=4096',
					'https://cdn.discordapp.com/attachments/936218584097644556/978684776041033799/unknown.png?size=4096',
					'https://cdn.discordapp.com/attachments/936218584097644556/978684807137615902/unknown.png?size=4096',
					'https://cdn.discordapp.com/attachments/936218584097644556/978684836732620860/unknown.png?size=4096',
					'https://cdn.discordapp.com/attachments/936218584097644556/978684863911714826/unknown.png?size=4096',
					// images here
					  ];

				const honk = [
					'https://tenor.com/view/honoka-gif-5514846',
					'https://tenor.com/view/honoka-gif-5514840',
					'https://tenor.com/view/honoka-kosaka-love-live-dance-gif-22348813',
					'https://tenor.com/view/honoka-kousaka-gif-19672583',
					'https://tenor.com/view/honoka-love-live-eating-mad-gif-5514850',
					'https://tenor.com/view/honoka-pillow-fight-anime-scared-gif-5514851',
					'https://tenor.com/view/honoka-gif-21580223',
					'https://tenor.com/view/honoka-love-live-gif-5514854',
					'https://tenor.com/view/honoka-gif-5514842',
					'https://tenor.com/view/honoka-kosaka-love-live-happy-gif-22348826',
					'https://tenor.com/view/honoka-kousaka-honoka-love-live-sifas-sif-gif-20280850',
					'https://tenor.com/view/honoka-kousaka-love-live-honoka-kosaka-kin-kinnie-gif-19147982',
					'https://tenor.com/view/honoka-anime-gif-5514844',
					'https://tenor.com/view/dragon-ball-z-rule-rule9900-honoka-kousaka-goku-gif-25691432',
					'https://tenor.com/view/honoka-love-live-anime-heart-gif-5514847',
					'https://tenor.com/view/honoka-kousaka-love-live-maid-gif-19659515',
					'https://tenor.com/view/honoka-kousaka-honk-love-live-sifas-flossing-gif-20504552',
					'https://tenor.com/view/love-live-honoka-kosaka-clapping-clap-good-job-gif-11917791',
					'https://tenor.com/view/honoka-kousaka-love-live-anime-nom-eats-bread-gif-12075787',
					'https://tenor.com/view/honoka-kousaka-gif-24723595',
					'https://tenor.com/view/honoka-kousaka-gif-24370324',
					'https://tenor.com/view/pensive-serious-uhoh-silent-thinking-gif-11846590',
					'https://tenor.com/view/lets-goo-honoka-kousaka-gif-23293886',
					'https://tenor.com/view/honoka-gif-5514853',
					'https://tenor.com/view/honoka-love-live-anime-frown-gif-5514849',
					'https://tenor.com/view/anime-happy-nuzzle-gif-19699344',
					'https://tenor.com/view/kosaka-honoka-love-live-move-arms-i-want-that-gif-17365872',
					// images here
					  ];
					  const queenValue = Math.floor(Math.random() * queen.length); // Gets a random value from the array's length
					  const honkValue = Math.floor(Math.random() * honk.length);
					  let random_number = Math.floor(Math.random() * 100); // Gets a random value between 1 and 100
					  const honkImage = honk[honkValue]; // Gives us the random image.
					  const queenImage = queen[queenValue]; // Gives us the random image.

					  if (random_number <= 10) {

                        if (i.user.id === buttonMaker) {
                            await interaction.editReply({ ephemeral: true, content: `British Person Jumpscare \n ${queenImage}`, embeds: [], components: []  });
                        }
    
                        else {
                            await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
                        }

					  }
					  else {

                        if (i.user.id === buttonMaker) {
                            await interaction.editReply({ ephemeral: true, content: `Honk \n ${honkImage}`, embeds: [], components: []  });
                         }
     
                         else {
                             await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
                         }

					  }

                     

				break;

            case 'kanye':
				let kanyeimages = [
					'https://tenor.com/view/kanye-sus-gif-21106687',
					'https://tenor.com/view/kanye-west-kanye-fast-moving-fast-gif-17781564',
					'https://tenor.com/view/kanye-kanye-west-funny-talking-gif-15547581',
					'https://tenor.com/view/kanye-west-kanye-west-stare-kanye-memes-webcam-gif-19811474',
					'https://tenor.com/view/yezzy-kanye-gif-25238066',
					'https://tenor.com/view/kanye-west-kanye-funny-lol-qwonty-gif-23031339',
					'https://tenor.com/view/kanye-west-kanye-no-gif-22568295',
					'https://tenor.com/view/kanye-kanye-west-kanye-mad-marti-xmellow-gif-22988712',
					'https://tenor.com/view/kanye-kanye-west-no-drink-champs-ye-gif-23684736',
					'https://tenor.com/view/bruh-gpo-bad-trade-nty-bro-gif-24142673',
					'https://tenor.com/view/kanye-kanye-taylor-taylor-swift-imma-let-you-finish-kanye-imma-let-you-gif-19373508',
					'https://tenor.com/view/kanye-south-kanye-east-kanye-west-kanye-north-kanye-gif-18581005',
					'https://tenor.com/view/kanye-west-donda-donda-chant-kanye-album-kanye-dance-gif-22884498',
					'https://tenor.com/view/kanye-ostinka-gif-22635178',
					'https://tenor.com/view/kanye-north-kanye-east-kanye-south-kanye-ifunny-gif-18580980',
					'https://tenor.com/view/kanye-west-king-gif-24584158',
					'https://tenor.com/view/kanye-west-blink-blinking-gif-15386085',
					'https://tenor.com/view/kanye-a-god-i-am-a-god-kanye-west-conceited-gif-5313292',
					'https://tenor.com/view/kanye-kanye-west-roblox-kayne-ratgifz-nervous-kanye-gif-14908888',
					'https://tenor.com/view/best-im-the-gif-23675766',
					'https://tenor.com/view/kanye-approves-kanye-west-applause-clapping-clap-gif-5848263',
					'https://tenor.com/view/kanye-west-te-yesterday-kim-kardashian-smile-gif-11985832',
					'https://tenor.com/view/kanye-west-no-smile-serious-mood-gif-15523762',
					'https://tenor.com/view/i-have-hired-kanye-to-stare-at-you-kanye-west-kanye-staring-kanye-stare-staring-gif-21813366',
					'https://tenor.com/view/kawaii-kanye-west-gif-22279829',
					'https://tenor.com/view/kanye-meme-troll-gif-23450530',
					'https://tenor.com/view/kanye-west-blink-blinking-eyes-attitude-gif-16548735',
					'https://tenor.com/view/kanye-west-gif-23414217',
					'https://tenor.com/view/kanye-west-stare-staring-funny-gif-13590085',
					'https://tenor.com/view/gif-gif-19493692',
					// images here
					];

                let appleImages = [
                    'https://tenor.com/view/tamura-yarichinbclub-gif-21153175',
                    'https://tenor.com/view/anime-ayato-yuri-yarichin-bitch-club-toru-fujisaki-gif-17867068',
                    'https://tenor.com/view/yuri-ayato-gif-19248444',
                    'https://tenor.com/view/yarichin-%D0%BA%D0%BB%D1%83%D0%B1%D1%8F%D1%80%D0%B8%D1%87%D0%B8%D0%BD-gif-20058600',
                    'https://tenor.com/view/sugar-gif-20789108',
                    'https://tenor.com/view/bom-dia-yarichin-ybc-yaribu-gif-24803631',
                    'https://tenor.com/view/ayato-yuri-gif-21079287',
                    'https://tenor.com/view/kiss-anime-in-love-couple-love-gif-17026181',
                    'https://tenor.com/view/baki-apple-fritter-gif-19912697',
                    'https://tenor.com/view/apple-fritter-omw-hater-gif-23705850',
                    'https://tenor.com/view/baki-apple-fritter-gif-22604208',
                    // images here
                    ];

                      const appleValue = Math.floor(Math.random() * appleImages.length); // Gets a random value from the array's length  
					  let kanyerandomValue = Math.floor(Math.random() * kanyeimages.length); // Gets a random value from the array's length
                      let Arandom_number = Math.floor(Math.random() * 100); // Gets a random value between 1 and 100
					  let kanyeimage = kanyeimages[kanyerandomValue]; // Gives us the random image.
                      const appleImage = appleImages[appleValue]; // Gives us the random image.

                      if (Arandom_number <= 5) {

					    if (i.user.id === buttonMaker) {
                            await interaction.editReply({ ephemeral: true, content: `Apple \n ${appleImage}`, embeds: [], components: []      });
                        }
    
                        else {
                            await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
                        }

					  }

					  else {

                      if (i.user.id === buttonMaker) {
						await interaction.editReply({ ephemeral: true, content: `Kanye \n ${kanyeimage}`, embeds: [], components: []   });
					}

					else {
						await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
					}
				}

				break;

            case 'lovelive':
				let images = [
					'https://tenor.com/view/sumire-heanna-love-live-superstar-love-live-liella-sumire-gif-22570668',
					'https://tenor.com/view/love-live-puchiguru-aqours-muse-gay-gif-20181243',
					'https://tenor.com/view/nico-yazawa-nico-nico-nii-spooky-jumpscare-meme-gif-23628014',
					'https://tenor.com/view/love-live-me-and-oomfie-oomfie-emma-rina-gif-25343404',
					'https://tenor.com/view/cunny-i-love-love-cunny-cunny-cunny-cunny-cute-gif-24196826',
					'https://tenor.com/view/nico-yazawa-love-live-sifas-love-live-allstars-gif-20181138',
					'https://tenor.com/view/nozomi-nico-honoka-kotori-maki-gif-25549509',
					'https://tenor.com/view/gangnam-style-love-live-setsuna-setsuna-yuki-love-live-nijigasaki-gif-23649678',
					'https://tenor.com/view/liella-love-live-sumire-keke-keke-tang-gif-23790793',
					'https://tenor.com/view/dragon-ball-z-rule-rule9900-honoka-kousaka-goku-gif-25691432',
					'https://tenor.com/view/honoka-kosaka-love-live-happy-gif-22348826',
					// images here
					  ];

                let gokuFeet = [
                    'https://bit.ly/3evQSTR',
                    'https://bit.ly/3x4pIJZ',
                    'https://bit.ly/3x6gQDU',
                    'https://bit.ly/3QneFme',
                    'https://bit.ly/3cVbrIW',
                    'https://bit.ly/3RDVTYw',
                    'https://bit.ly/3cVbyUS',
                    'https://bit.ly/3ekdEhe',
                    'https://bit.ly/3U0UXzI',
                    'https://bit.ly/3Qi1Idi',
                    'https://bit.ly/3eoZZpb',
                    // images here
                        ];

                      const gokValue = Math.floor(Math.random() * gokuFeet.length); // Gets a random value from the array's length  
					  let randomValue = Math.floor(Math.random() * images.length); // Gets a random value from the array's length
					  let Lrandom_number = Math.floor(Math.random() * 100); // Gets a random value between 1 and 100
					  let image = images[randomValue]; // Gives us the random image.
                      const gokImage = gokuFeet[gokValue]; // Gives us the random image.

					  if (Lrandom_number <= 3) {

					    if (i.user.id === buttonMaker) {
                            await interaction.editReply({ ephemeral: true, content: `Gok \n ${gokImage}`, embeds: [], components: []      });
                        }
    
                        else {
                            await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
                        }

					  }

					  else {

                        if (i.user.id === buttonMaker) {
                            await interaction.editReply({ ephemeral: true, content: `Love Live \n ${image}`, embeds: [], components: []   });
                        }
    
                        else {
                            await interaction.followUp({ ephemeral: true, content: `Only <@${buttonMaker}> can use the button!` });
                        }

					  }

                      


				break;
			}


		});

		collector.on('end', (collected) => console.log(`Collected ${collected.size} items`));

    }
	}
	},

	data: new SlashCommandBuilder()
		.setName('button')
		.setDescription('Button'),
};