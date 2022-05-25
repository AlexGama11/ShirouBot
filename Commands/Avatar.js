const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {
		const user = interaction.options.getUser('mentioneduser');

		if (user) {
			const avatar = user.displayAvatarURL({ dynamic: true, size: 1024 });
			const avatarSelf = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

			const avatarEmbed = new MessageEmbed()
				.setColor('#00cc00')
				.setTitle(`${user.username}'s avatar`)
				.setDescription('Their avatar is shown here')
				.setImage(avatar)
				.setFooter(`${interaction.user.username} requested ${user.username}'s avatar`, avatarSelf, true)
				.setTimestamp();

			await interaction.reply({ embeds: [avatarEmbed] });
		}

		else {
			const avatarSelf = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

			const avatarEmbed = new MessageEmbed()
				.setColor('#00cc00')
				.setTitle(`${interaction.user.username}'s avatar`)
				.setDescription('Your avatar is shown here')
				.setImage(avatarSelf)
				.setFooter(`${interaction.user.username} requested their own avatar`, avatarSelf, true)
				.setTimestamp();

			await interaction.reply({ embeds: [avatarEmbed] });
		}
	},

	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Gets the avatar of whoever you mention')
		.addUserOption((option) => option.setName('mentioneduser').setDescription('Select a user to get their avatar')),
};
