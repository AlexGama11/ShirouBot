const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {
		const avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

		let str = [];
		const localNamesArray = [];
		const namesArray = [];

		const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

		const titleLocales = {
			"pt-BR": 'Comando de Ajuda',
		};

		const footerLocales = {
			"pt-BR": `${interaction.user.username} pediu a lista de todos os comandos`,
		};

		const helpEmbed = new MessageEmbed()
			.setColor('#73c0f9')
			.setTitle(titleLocales[interaction.locale] ?? 'Help Command')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.setFooter({text: footerLocales[interaction.locale] ?? `${interaction.user.username} requested a list of all the commands`, iconURL: avatar})
			.setTimestamp();

			for (const file of commandFiles) {
				const command = require(`./${file}`);

				localizedNames = command.data.name_localizations["pt-BR"];

				localNamesArray.push(localizedNames);

				localNamesArray.sort();

				englishNames = command.data.name;
				
				namesArray.push(englishNames);

				namesArray.sort();
			}

			if (interaction.locale == "pt-BR")
			{
				if (interaction.guild.id == '954244688464982067')
				{
					for (let i = 0; i < 5; i++)
					{
						if (i = 1)
						{
							var item = "butão";
							
							var index = namesArray.indexOf(item);
							if (index !== -1) {
							namesArray.splice(index, 1);
							}
						}

						if (i = 2)
						{
							var item = "contratogata";
							
							var index = localNamesArray.indexOf(item);
							if (index !== -1) {
								localNamesArray.splice(index, 1);
							}
						}

						if (i = 3)
						{
							var item = "correioparamods";
							
							var index = localNamesArray.indexOf(item);
							if (index !== -1) {
								localNamesArray.splice(index, 1);
							}
						}

						if (i = 4)
						{
							var item = "eco";
							
							var index = localNamesArray.indexOf(item);
							if (index !== -1) {
								localNamesArray.splice(index, 1);
							}
						}
					}
				}

				localNamesArray.forEach(element => {
					str += `${element} \n`;
				});
			}

			else
			{
				if (interaction.guild.id == '954244688464982067')
				{
					for (let i = 0; i < 5; i++)
					{
						if (i = 1)
						{
							var item = "button";
							
							var index = namesArray.indexOf(item);
							if (index !== -1) {
							namesArray.splice(index, 1);
							}
						}

						if (i = 2)
						{
							var item = "kittencontract";

							var index = namesArray.indexOf(item);
							if (index !== -1) {
							namesArray.splice(index, 1);
							}
						}

						if (i = 3)
						{
							var item = "modmail";
							
							var index = namesArray.indexOf(item);
							if (index !== -1) {
							namesArray.splice(index, 1);
							}
						}

						if (i = 4)
						{
							var item = "echo";
							
							var index = namesArray.indexOf(item);
							if (index !== -1) {
							namesArray.splice(index, 1);
							}
						}
					}
				}

				namesArray.forEach(element => {
					str += `${element} \n`;
				});
			}

		const commandLocales = {
			"pt-BR": `Aqui está a lista de todos os comandos que o Shirou pode fazer!`,
		};

		helpEmbed.addField( str, commandLocales[interaction.locale] ?? 'Here\'s the list of all the commands Shirou can do!', true);

		await interaction.reply({ embeds: [helpEmbed] });
		//console.log(interaction.guild.id);
	},

	data: new SlashCommandBuilder()
		.setName('help').setNameLocalizations({ "pt-BR": 'ajuda', })
		.setDescription('Lists all commands shirou can do!').setDescriptionLocalizations({ "pt-BR": 'Lista de todos os comandos que o shirou consegue fazer!', }),
};
