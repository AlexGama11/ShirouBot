const { SlashCommandBuilder, EmbedBuilder, Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const dotenv = require('dotenv').config();

module.exports =
{
	async execute(interaction) {

        const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

		const titleLocales = {
			"pt-BR": 'Lista de Servidores',
		};

		const serverLocales = {
			"pt-BR": interaction.client.guilds.cache.map(g => `Nome do Servidor: ${g.name}\n  Número de Membros: ${g.memberCount}`).join('\n\n'),
		};

		const footerLocales = {
			"pt-BR": `${interaction.user.username} perguntou pela lista de servidores`,
		};

        const serverEmbed = new EmbedBuilder()
				.setColor('#570B7C')
				.setTitle(titleLocales[interaction.locale] ?? 'ServerList')
				.setDescription(serverLocales[interaction.locale] ?? interaction.client.guilds.cache.map(g => `Server Name: ${g.name}\n  Total Members: ${g.memberCount}`).join('\n\n'))
				.setThumbnail('https://media.discordapp.net/attachments/729152235745050635/1054589761752399952/latest.png')
				.setFooter({text: footerLocales[interaction.locale] ?? `${interaction.user.username} asked for the server list`, iconURL: avatar})
				.setTimestamp();

        await interaction.reply({ ephemeral: false, embeds: [serverEmbed] });
       
	},

	data: new SlashCommandBuilder()
		.setName('serverlist').setNameLocalizations({ "pt-BR": 'listadeservidores', })
		.setDescription('Returns the names, and membercount of every server the bot is in!').setDescriptionLocalizations({ "pt-BR": 'Mostra os nomes e o numero de membros dos servidores!', }),
};
