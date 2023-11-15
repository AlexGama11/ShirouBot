const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('discord.js');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

module.exports =
{
	async execute(interaction) {
		const user = interaction.options.getUser('mentioneduser');

		if (user) {
			const avatar = user.displayAvatarURL({ dynamic: true, size: 1024 });
			const avatarSelf = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

			const titleLocales = {
				"pt-BR": `Avatar de ${user.username}`,
			};

			const descriptionLocales = {
				"pt-BR": 'O avatar deles é mostrado aqui',
			};

			const footerLocales = {
				"pt-BR": `${interaction.user.username} pediu o avatar de ${user.username}`,
			};
	
			const avatarEmbed = new EmbedBuilder()
				.setColor('#00cc00')
				.setTitle(titleLocales[interaction.locale] ?? `${user.username}'s avatar`)
				.setDescription(descriptionLocales[interaction.locale] ?? 'Their avatar is shown here')
				.setImage(avatar)
				.setFooter({text: footerLocales[interaction.locale] ?? `${interaction.user.username} requested ${user.username}'s avatar`, iconURL: avatarSelf })
				.setTimestamp();

			await interaction.reply({ embeds: [avatarEmbed] });
		}

		else {
			const avatarSelf = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

			const titleLocales = {
				"pt-BR": `Avatar de ${interaction.user.username}`,
			};

			const descriptionLocales = {
				"pt-BR": 'O teu avatar é mostrado aqui',
			};

			const footerLocales = {
				"pt-BR": `${interaction.user.username} pediu o seu avatar`,
			};

			const avatarEmbed = new EmbedBuilder()
				.setColor('#00cc00')
				.setTitle(titleLocales[interaction.locale] ?? `${interaction.user.username}'s avatar`)
				.setDescription(descriptionLocales[interaction.locale] ?? 'Your avatar is shown here')
				.setImage(avatarSelf)
				.setFooter({text: footerLocales[interaction.locale] ?? `${interaction.user.username} requested their own avatar`, iconURL: avatarSelf})
				.setTimestamp();

			await interaction.reply({ embeds: [avatarEmbed] });
		}
	},

	data: new SlashCommandBuilder()
		.setName('avatar').setNameLocalizations({ "pt-BR": 'fotodeperfil', })
		.setDescription('Gets the avatar of whoever you mention').setDescriptionLocalizations({ "pt-BR": 'Pega o avatar de quem mencionares', })
		.addUserOption((option) => option.setName('mentioneduser').setNameLocalizations({ "pt-BR": 'utilizadormencionado', }).setDescription('Select a user to get their avatar').setDescriptionLocalizations({ "pt-BR": 'Seleciona o utilizador do avatar que queres roubar', })),
};
