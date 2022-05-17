const fs = require('fs');
const { Client, Collection, Intents} = require("discord.js");
//const { token } = require(process.env.token);
const client = new Client({ partials: ["CHANNEL"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles)
{
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.on("ready", () =>
{
	console.log(`Let's go, Tohsaka!`); 
  client.user.setActivity(`Use /help to get a list of commands`);
});


client.on('interactionCreate', async interaction =>
{
	if (!interaction.isCommand() && !interaction.isButton()) return;

	if(interaction.isCommand())
	{
		const command = client.commands.get(interaction.commandName.toLocaleLowerCase());

		if (!command)
		{
			await interaction.reply
      ({
					content: 'No such command registered!',
					ephemeral: true
      });

			return;
		}
		try
		{
			await command.execute(interaction);
		}
		catch (error)
		{
			console.error(error);
			await interaction.reply
      ({
					content: 'There was an error while executing this command!',
					ephemeral: true
      });
		}
	}
});

client.login(token);