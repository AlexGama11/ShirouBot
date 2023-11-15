const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const dotenv = require('dotenv').config();

const staging = process.argv.includes('--staging');
const reset = process.argv.includes('--reset');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

if (!reset) {
	for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		commands.push(command.data.toJSON());
	}
}

const rest = new REST({ version: '9' }).setToken(process.env.token);

(async () => {
	try {
		if (!reset) {
			if (staging) {
				await rest.put
				(
					Routes.applicationGuildCommands(process.env.clientId, process.env.guildId),
					{ body: commands },
				);

				console.log('Successfully registered staging commands.');
			}
			else {
				await rest.put
				(
					Routes.applicationCommands(process.env.clientId),
					{ body: commands },
				);

				console.log('Successfully registered global commands.');
			}
		}
		else {
			await rest.put
			(
				Routes.applicationGuildCommands(process.env.clientId, process.env.guildId),
				{ body: commands },
			);

			await rest.put
			(
				Routes.applicationCommands(process.env.clientId),
				{ body: commands },
			);

			console.log('Successfully reset all commands.');
		}
	}
	catch (error) {
		console.error(error);
	}
})();