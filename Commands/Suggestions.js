const { SlashCommandBuilder, EmbedBuilder, Client, Collection, GatewayIntentBits, TextChannel } = require('discord.js');
const client = new Client({ partials: ['CHANNEL'], intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages] });

module.exports =
{
	async execute(interaction) {
		// const guild = interaction.client.guilds.fetch("900521414933757983");
		const string = interaction.options.getString('message');
		const alex = await interaction.client.users.fetch('224258146078556160');
		const attachment = interaction.options.getAttachment('attachment');
		const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });
		const guild = interaction.guild.name

		const titleLocales = {
			"pt-BR": 'Sugestão',
		};

		const descriptionLocales = {
			"pt-BR": `Obrigado pela tua sugestão, o Alex vai rever quando puder!`,
		};

		const footerLocales = {
			"pt-BR": `${interaction.user.username} mandou uma sugestão`,
		};

			const avatarEmbed = new EmbedBuilder()
				.setColor('#6600ff')
				.setTitle(titleLocales[interaction.locale] ?? 'Suggestion')
				.setDescription(descriptionLocales[interaction.locale] ?? 'Thank your for your suggestion, Alex will review it when he can!')
				.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
				.setFooter({text: footerLocales[interaction.locale] ?? `${interaction.user.username} sent a suggestion`, iconURL: avatar})
				.setTimestamp();

			if (!attachment) {
				await alex.send(`${interaction.user.username} from ${guild} sent a suggestion: ${string}`);
				console.log(attachment);
			}

			else {
				await alex.send(`${interaction.user.username} from ${guild} sent a suggestion: ${string} ` + attachment.attachment);

				console.log(attachment.url);
			}

			await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
		
	},

	data: new SlashCommandBuilder()
		.setName('suggestions').setNameLocalizations({ "pt-BR": 'sugestão', })
		.setDescription('Send a suggestion to Alex!').setDescriptionLocalizations({ "pt-BR": 'Manda uma sugestão ao Alex!', })
		.addStringOption((option) => option.setName('message').setNameLocalizations({ "pt-BR": 'mensagem', }).setDescription('Enter your message!').setDescriptionLocalizations({ "pt-BR": 'Escreve a tua mensagem!', }).setRequired(true))
		.addAttachmentOption((option) => option.setName('attachment').setNameLocalizations({ "pt-BR": 'ficheiro', }).setDescription('Add an attachment')).setDescriptionLocalizations({ "pt-BR": 'Adiciona um ficheiro!', }),
};
