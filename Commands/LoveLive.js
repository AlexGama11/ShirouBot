const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction, GuildMemberRoleManager, MessageActionRow, MessageButton } = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {
		const guildMember = interaction.member;
		const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

		const loveliveEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle('LoveLive')
			.setDescription('LoveLive Button')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.setFooter(`${interaction.user.username} asked for lovelive`, avatar, true)
			.setTimestamp();

		// ================================================================================================================================//


		const lovelive = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('lovelive')
					.setLabel('LoveLive')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ ephemeral: false, embeds: [loveliveEmbed], components: [lovelive] });

		// const filter = i => i.user.id === interaction.user.id;

		const collector = interaction.channel.createMessageComponentCollector({ /* filter, */time: 60000 });

		collector.on('collect', async (i) => {
			i.deferUpdate();

			switch (i.customId) {
			case 'lovelive':
				const images = [
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
					  const randomValue = Math.floor(Math.random() * images.length); // Gets a random value from the array's length
					  const random_number = Math.floor(Math.random() * 1000); // Gets a random value between 1 and 1000
					  const image = images[randomValue]; // Gives us the random image.

					  if (random_number == 1) {
					await interaction.followUp({ content: 'https://c.tenor.com/uNdQQHZXhJwAAAPo/goku-patas.mp4' });
					  }
					  else {
					  	await interaction.followUp({ content: `Love Live \n ${image}` });
					  }
				break;
			}
		});

		collector.on('end', (collected) => console.log(`Collected ${collected.size} items`));
	},

	data: new SlashCommandBuilder()
		.setName('lovelive')
		.setDescription('LoveLive Button'),
};
