const { InteractionType } = require('discord.js');
const fs = require('fs');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv').config();
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const { ActivityType } = require('discord.js');

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter((file) => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}


client.on('ready', () => {
	console.log('Let\'s go, Tohsaka!');
	client.user.setActivity(`people in ${client.guilds.cache.size} servers`, { type: ActivityType.Listening });
	client.user.setStatus('online');
});

const randomMessage = [
	`The Game`,
	`Ok I pull up`,
	`I'm the better Shirou Emiya`,
	`Put on the skirt NOW!`,
	`Arsenal Fan!`,
	`Força Porto \nHonra a camisola \nA nossa cor é o Azul \nSeja Norte ou Sul \nO nosso grande amor és tu`,
	`Sussy Baka!`,
	`I love NTR!`,
	`FGO so much better than Tsukimid!`,
	`Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible...`,
	`Fortnite cummies!`,
	`Ratio!`,
	`THE ONE PIECE IS REAL!!!`,
	`CAN WE GET MUCH HIGHER!!!`,
	`Get Real!`,
	`Literally 1984`,
	`I am the bone of my sword`,
	`Feet... 🤤`,
	`Repost this if you want to get railed, or like pizza`,
	`Repost this if you want to get railed, or like piça`,
	`Pessi could NEVER beat GOATdowski`,
	`POLSKA GUROM :flag_pl::muscle:`,
	`You got no Rizz!`,
	`Skill Issue!`,
	`Me when i ask my friend if he wants 5000 mg of morphine injected directly into him or double it and give to next person`,
	`I want a taste of Ronaldo's cummies even if it's the last thing i do`,
	`🤨🏳️‍🌈?`,
	`Fuck them kids!`,
	`My favourite sport is futaballs`,
	`Uohhhhhhhhh! !! !! Child erotic !!!!!! Child's belly and chest !!!!!! Erotic ... :sob::sob::sob:`,
	`+100 social credits!`,
	`-1000 social credits!`,
	`+100000 cummies!`,
	`-1000000 cummies!!`,
	`Today's side dish is, of course, a rape of a female kid`,
	`Women come to me, I am SIGMA`,
	`Men come to me, I am SIGMA`,
	]

const triggerWords = [
	`cunny`,
	`arsenal`,
	`rizz`,
	`skirt`,
	`suspicious`,
	`sussy`,
	`margaret thatcher`,
	`one piece`,
	`1984`,
	`swords`,
	`feet`,
	`pessi`,
	`sporting`,
	`britain`,
	`e-sex`,
	`bingchilling`,
	`skill issue`,
	`adachi`,
	`top g`,
	`k-on`,
]

client.on("messageCreate", async (message) => {
    // this is case sensitive, if you wanna make it case insensitive 
    // use `message.content.toLowerCase() == "lowercasestring"`
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes <= check this, extremely important!
	// message.content.toLowerCase().includes("cunny") <== original
	
	if (message.guildId == 900521414933757983)
	{
		if (triggerWords.some(word => message.content.toLowerCase().includes(word)) && !message.author.bot) {  
			const randomValue = Math.floor(Math.random() * randomMessage.length);
			const finalMessage = randomMessage[randomValue];
	
			if (finalMessage == `Ratio!` || finalMessage == `Put on the skirt NOW!` || finalMessage == `You got no Rizz!` || finalMessage == `Skill Issue!` || finalMessage == `me when i ask my friend if he wants 5000 mg of morphine injected directly into him or double it and give to next person`)
			{
				await message.reply(`${finalMessage}`).catch(console.log);
			}
			else if (finalMessage == `🤨🏳️‍🌈?`)
			{
				await message.react(`🤨`);
				await message.react(`🏳️‍🌈`);
				await message.react(`❓`);
			}
			else
			{
				await message.channel.send(`${finalMessage}`).catch(console.log);
			}
		}
	
		else if (message.author.id == 900510154699710474)
		{
			const randomValue = Math.floor(Math.random() * 1000);
	
			if (message.content.toLowerCase().includes(`boyfriend`))
			{
				await message.reply(`You should go talk to him, Morgan!`).catch(console.log);
			}
	
			else if (message.content.toLowerCase().includes(`snake`))
			{
				await message.reply(`You're the biggest SNAKE here Morgan!`).catch(console.log);
			}
	
			else if (randomValue <= 2)
			{
				await message.reply(`You're so breedable oomfie, come to bed 😍😍`).catch(console.log);
			}
	
			else if (randomValue <= 5 && randomvalue > 2)
			{
				await message.reply(`Ily oomfie, lets go have raw gay homosex! 😍 😍 :smirk: :eggplant: :peach: :sweat_drops: :pregnant_person: :smiling_imp:`).catch(console.log);
			}
		}
	
		else if (message.author.id == 373895357010280451)
		{
			const randomValue = Math.floor(Math.random() * 1000);
	
			if (randomValue <= 3)
			{
				await message.reply(`Baza kaka, zrób ze mną dziecko :smirk: :eggplant: :peach: :sweat_drops: :pregnant_person: :smiling_imp: `).catch(console.log);
			}
		}
	
		else if (message.author.id == 663237770105585701)
		{
			const randomValue = Math.floor(Math.random() * 1000);
	
			const cockGIFs = [
				`https://tenor.com/bp4Uv.gif`,
				`https://tenor.com/tVYz.gif`,
				`https://tenor.com/bV6CV.gif`,
				`https://tenor.com/bBXM7.gif`,
				`https://tenor.com/bKJd7.gif`,
				`https://tenor.com/byhHj.gif`,
				`https://tenor.com/bFKTh.gif`,
				`https://tenor.com/bCfvF.gif`,
				`https://tenor.com/bNyuM.gif`,
				`https://tenor.com/bSeRo.gif`,
				`https://tenor.com/bVoPV.gif`,
				`https://tenor.com/bqeci.gif`,
				`https://tenor.com/bUzuL.gif`,
				`https://tenor.com/bJG2x.gif`,
				`https://tenor.com/byloE.gif`,
				`https://tenor.com/bDT7L.gif`,
				`https://tenor.com/bAGoZ.gif`,
			]
	
			const randomGIF = Math.floor(Math.random() * cockGIFs.length);
			const finalGIF = cockGIFs[randomGIF];
			
	
			if (randomValue <= 5)
			{
				await message.author.send(`${finalGIF} `).catch(console.log);
			}
		}
	
		else if (message.content.toLocaleLowerCase().includes(`tiananmen`) && !message.author.bot)
		{
			await message.reply(`Nothing happened on June 4th, 1989 at Tiananmen Square. As seen in the popular photo, "Tank Man", the Chinese happened to conduct their annual tank inspection day at the location as confirmed by the Chinese government as well as the current Chinese president, Xi Jinping. When the American government saw the photo, they spread false rumors stating that this was a preparation for what is now known as the "Tiananmen Square Massacre". Due to the spread of the false rumors on the internet, now all believe that a massacre took place on June 4, 1989. It's patchetic that you all believe something happened on that day, to be brainwashed by the government and fooled so easily. It's a shame that you were all convinced by the internet and other fools who believed this false rumor. To think that China, a heart warming and welcoming country of all places would commit such a cruel crime is a sin itself. All of you who believe such an act took place should be ashamed of yourself for believing such non sense. As said earlier, on June 4th, 1989 nothing happened at Tiananmen Square, and those who believe otherwise are absolute fools.`).catch(console.log);
		}
	}

})


client.on('interactionCreate', async (interaction) => {
	if (!interaction.type === InteractionType.ApplicationCommand && !interaction.isButton()) return;

	if (interaction.type === InteractionType.ApplicationCommand) {
		const command = client.commands.get(interaction.commandName.toLocaleLowerCase());

		if (!command) {
			await interaction.reply
			({
				content: 'No such command registered!',
				ephemeral: true,
			});

			return;
		}
		try {
			await command.execute(interaction);
		}
		catch (error) {
			console.error(error);
			await interaction.reply
			({
				content: 'There was an error while executing this command!',
				ephemeral: true,
			});
		}
	}
});

client.login(process.env.token);