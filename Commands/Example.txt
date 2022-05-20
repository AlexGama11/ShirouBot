const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");

module.exports =
{
	async execute(interaction)
	{
		await interaction.reply("TEST!");
	},

	data: new SlashCommandBuilder()
		.setName('example')
		.setDescription('example interaction command')
};