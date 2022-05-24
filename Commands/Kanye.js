const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction, GuildMemberRoleManager, MessageActionRow, MessageButton } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {

		let guildMember = interaction.member;
		let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

		const kanyeEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Kanye`)
			.setDescription('Kanye Button')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.setFooter(`${interaction.user.username} asked for kanye`, avatar, true)
			.setTimestamp()

		//================================================================================================================================//


		const kanye = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('kanye')
				.setLabel('Kanye')
				.setStyle('PRIMARY'),
		)

		await interaction.reply({ ephemeral: false, embeds: [kanyeEmbed], components: [kanye] });

        //const filter = i => i.user.id === interaction.user.id;

        const collector = interaction.channel.createMessageComponentCollector({ /*filter, */time: 60000 });

		collector.on('collect', async i => {
			i.deferUpdate();

			switch (i.customId)
			{

				case "kanye":
					const images = [
						`https://tenor.com/view/kanye-sus-gif-21106687`,
						`https://tenor.com/view/kanye-west-kanye-fast-moving-fast-gif-17781564`,
						`https://tenor.com/view/kanye-kanye-west-funny-talking-gif-15547581`,
						`https://tenor.com/view/kanye-west-kanye-west-stare-kanye-memes-webcam-gif-19811474`,
						`https://tenor.com/view/yezzy-kanye-gif-25238066`,
						`https://tenor.com/view/kanye-west-kanye-funny-lol-qwonty-gif-23031339`,
						`https://tenor.com/view/kanye-west-kanye-no-gif-22568295`,
						`https://tenor.com/view/kanye-kanye-west-kanye-mad-marti-xmellow-gif-22988712`,
						`https://tenor.com/view/kanye-kanye-west-no-drink-champs-ye-gif-23684736`,
						`https://tenor.com/view/bruh-gpo-bad-trade-nty-bro-gif-24142673`,
						`https://tenor.com/view/kanye-kanye-taylor-taylor-swift-imma-let-you-finish-kanye-imma-let-you-gif-19373508`,
						`https://tenor.com/view/kanye-south-kanye-east-kanye-west-kanye-north-kanye-gif-18581005`,
						`https://tenor.com/view/kanye-west-donda-donda-chant-kanye-album-kanye-dance-gif-22884498`,
						`https://tenor.com/view/kanye-ostinka-gif-22635178`,
						`https://tenor.com/view/kanye-north-kanye-east-kanye-south-kanye-ifunny-gif-18580980`,
						`https://tenor.com/view/kanye-west-king-gif-24584158`,
						`https://tenor.com/view/kanye-west-blink-blinking-gif-15386085`,
						`https://tenor.com/view/kanye-a-god-i-am-a-god-kanye-west-conceited-gif-5313292`,
						`https://tenor.com/view/kanye-kanye-west-roblox-kayne-ratgifz-nervous-kanye-gif-14908888`,
						`https://tenor.com/view/best-im-the-gif-23675766`,
						`https://tenor.com/view/kanye-approves-kanye-west-applause-clapping-clap-gif-5848263`,
						`https://tenor.com/view/kanye-west-te-yesterday-kim-kardashian-smile-gif-11985832`,
						`https://tenor.com/view/kanye-west-no-smile-serious-mood-gif-15523762`,
						`https://tenor.com/view/i-have-hired-kanye-to-stare-at-you-kanye-west-kanye-staring-kanye-stare-staring-gif-21813366`,
						`https://tenor.com/view/kawaii-kanye-west-gif-22279829`,
						`https://tenor.com/view/kanye-meme-troll-gif-23450530`,
						`https://tenor.com/view/kanye-west-blink-blinking-eyes-attitude-gif-16548735`,
						`https://tenor.com/view/kanye-west-gif-23414217`,
						`https://tenor.com/view/kanye-west-stare-staring-funny-gif-13590085`,
						`https://tenor.com/view/gif-gif-19493692`
						// images here
					  ]
					  const randomValue = Math.floor(Math.random() * images.length) // Gets a random value from the array's length
					  const image = images[randomValue] // Gives us the random image.

					  await interaction.followUp({ content: `Kanye \n ${image}` });
					break;

            }

		});

		collector.on('end', collected => console.log(`Collected ${collected.size} items`));

	},

	data: new SlashCommandBuilder()
		.setName('kanye')
		.setDescription('Kanye Button')
};