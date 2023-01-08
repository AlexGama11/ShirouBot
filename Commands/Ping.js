/* eslint-disable no-unused-vars */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {

		const locales = {
			"pt-BR": 'Pingar...',
		};

		const sent = await interaction.reply({ content: locales[interaction.locale] ?? 'Pinging...', fetchReply: true });

		const localesReply = {
			"pt-BR": `:ping_pong: Latência de ida e volta: ${sent.createdTimestamp - interaction.createdTimestamp}ms :ping_pong:`,
		}

		interaction.editReply(localesReply[interaction.locale] ?? `:ping_pong: Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms :ping_pong:`);

		// await interaction.reply(`:ping_pong: Latency is ${Date.now() - interaction.createdTimestamp} ms.`);
	},

	data: new SlashCommandBuilder()
		.setName('ping').setNameLocalizations({ "pt-BR": 'ping', })
		.setDescription('Gives bot Ping').setDescriptionLocalizations({ "pt-BR": 'Dá o ping do bot!', }),
};