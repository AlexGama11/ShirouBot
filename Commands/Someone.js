const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });
const dotenv = require('dotenv').config();

module.exports =
{
	async execute(interaction) {

        const Guild = interaction.client.guilds.cache.get(interaction.guild.id);

        //const Members = Guild.members.cache.map(m => m.id);

        //console.log(Members);

		const users = Guild.members.cache.map(u => u.id);
		
        console.log(`Listing user ids from ${interaction.guild.name}:`);
        console.log(users);

		const randomValue = Math.floor(Math.random() * users.length);
		const finalMessage = users[randomValue];

		const locales = {
			"pt-BR": `<@${finalMessage}> sê mencionado corno!`,
		};

        await interaction.reply({ ephemeral: false, content: locales[interaction.locale] ?? `<@${finalMessage}> get pinged dumbass!` });
       
	},

	data: new SlashCommandBuilder()
		.setName('someone').setNameLocalizations({ "pt-BR": 'alguém', })
		.setDescription('@\'s a random person!').setDescriptionLocalizations({ "pt-BR": 'Menciona uma pessoa ao calhas!', }),
};