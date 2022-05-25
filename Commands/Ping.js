/* eslint-disable no-unused-vars */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {
		const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });
		interaction.editReply(`:ping_pong: Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms :ping_pong:`);

		// await interaction.reply(`:ping_pong: Latency is ${Date.now() - interaction.createdTimestamp} ms.`);
	},

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Gives bot Ping'),
};