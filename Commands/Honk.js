const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction, GuildMemberRoleManager, MessageActionRow, MessageButton } = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {
		const guildMember = interaction.member;
		const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

		const kanyeEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle('Honk')
			.setDescription('Honk Button')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.setFooter(`${interaction.user.username} asked for Honk`, avatar, true)
			.setTimestamp();

		// ================================================================================================================================//


		const kanye = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('honk')
					.setLabel('Honk')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ ephemeral: false, embeds: [kanyeEmbed], components: [kanye] });

		// const filter = i => i.user.id === interaction.user.id;

		const collector = interaction.channel.createMessageComponentCollector({ /* filter, */time: 60000 });

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
					  const random_number = Math.floor(Math.random() * 100); // Gets a random value between 1 and 100
					  const honkImage = honk[honkValue]; // Gives us the random image.
					  const queenImage = queen[queenValue]; // Gives us the random image.

					  if (random_number <= 5) {
					await interaction.followUp({ content: `Queen \n ${queenImage}` });
					  }
					  else {
					  	await interaction.followUp({ content: `Honk \n ${honkImage}` });
					  }
				break;
			}
		});

		collector.on('end', (collected) => console.log(`Collected ${collected.size} items`));
	},

	data: new SlashCommandBuilder()
		.setName('honk')
		.setDescription('Honk Button'),
};
