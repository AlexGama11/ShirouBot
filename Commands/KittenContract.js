const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction, GuildMemberRoleManager, MessageActionRow, MessageButton } = require('discord.js');
const { Client, Collection, Intents, TextChannel } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const wait = require('util').promisify(setTimeout);
const fs = require('fs');

module.exports =
{
	async execute(interaction) {
		const user = interaction.options.getUser('kitten');
		const cc = interaction.user.id;
		const ccName = interaction.user.username;
		const kitten = user.id;
		const kittenName = user.username;

		let contractNumber = 0;

		let today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
		const yyyy = today.getFullYear();

		today = dd + '/' + mm + '/' + yyyy;

		const contract = `***Discord Kitten Contract***

**Contract Conductor**: <@${cc}>
**Issued**: ${today}
**Form #**: A-56

**Discord Kitten Contract Agreement**

By signing this contract, you agree to all the terms listed below or negotiated terms that will be attached to this document. You (<@${kitten}>, thereafter referred to as Kitten) hereby agree to flirt, serve, and sext on the social media interface known as "Discord" with the Contract Conductor listed above. As well as consenting to the Contract Conductor being able to sleep/lay on your legs whenever requested, touch you in places that does not consist of sexual organs, kiss you, hug you, pet you, degrade you, slightly harass you, and take care of you.

You will have to provide one nude photo or video to the Contract Conductor at least once a week to meet your contracted quota. At least four voice messages weekly, directed to the Contract Conductor calling him daddy. Everyday you must send one photo of yourself to the CC (Contract Conductor) when you wake up and one photo before you go to bed. Most important of all you MUST be lovable and attentive to the CC. Other items/activities can be added or taken off the agreement if both parties consent. You are also allowed to freely ask questions to the CC.

Payment in the source of one $5 Nitro per month will be given as long as the Kitten (you, the signer) is held under this contract. However, payment of $5 Nitro will not be delivered until one week (seven days or 168 hours) has passed after this contract is signed to prevent Kittens from running away. When the Kitten accepts the gift of one $5 Nitro, they must stay loyal to the CC for one month until it ends. Any disloyalty that breaks this contract will result in a Refund which will suspend/ban the claimers account - stated in "Discord" ToS. Any other sources of payment agreed too will follow what is listed above.

**Kitten's Signature:**

**Date of Signature: **`;

		const signedcontract = `***Discord Kitten Contract***
**Contract Conductor**: <@${cc}> 
**Issued**: ${today}
**Form #**: A-56

**Discord Kitten Contract Agreement**

By signing this contract, you agree to all the terms listed below or negotiated terms that will be attached to this document. You (<@${kitten}>, thereafter referred to as Kitten) hereby agree to flirt, serve, and sext on the social media interface known as "Discord" with the Contract Conductor listed above. As well as consenting to the Contract Conductor being able to sleep/lay on your legs whenever requested, touch you in places that does not consist of sexual organs, kiss you, hug you, pet you, degrade you, slightly harass you, and take care of you.

You will have to provide one nude photo or video to the Contract Conductor at least once a week to meet your contracted quota. At least four voice messages weekly, directed to the Contract Conductor calling him daddy. Everyday you must send one photo of yourself to the CC (Contract Conductor) when you wake up and one photo before you go to bed. Most important of all you MUST be lovable and attentive to the CC. Other items/activities can be added or taken off the agreement if both parties consent. You are also allowed to freely ask questions to the CC.

Payment in the source of one $5 Nitro per month will be given as long as the Kitten (you, the signer) is held under this contract. However, payment of $5 Nitro will not be delivered until one week (seven days or 168 hours) has passed after this contract is signed to prevent Kittens from running away. When the Kitten accepts the gift of one $5 Nitro, they must stay loyal to the CC for one month until it ends. Any disloyalty that breaks this contract will result in a Refund which will suspend/ban the claimers account - stated in "Discord" ToS. Any other sources of payment agreed too will follow what is listed above.

**Kitten's Signature: <@${kitten}>**

**Date of Signature: ${today} **`;

		if (!user) {
			interaction.reply({ ephemeral: true, content: 'You need to add a user!' });
		}

		else if (kitten == '692585507384983622') {
			await interaction.reply({ content: 'You cant make the bot into a kitten!' });
		}

		else {
			const sign = new MessageActionRow()
				.addComponents(
					new MessageButton()
						.setCustomId('sign')
						.setLabel('Sign')
						.setStyle('DANGER'),
				);

			await interaction.reply({ ephemeral: false, content: contract, components: [sign] });

			// const filter = i => i.user.id === interaction.user.id;

			const collector = interaction.channel.createMessageComponentCollector({ /* filter, */time: 60000 });

			collector.on('collect', async (i) => {
				i.deferUpdate();

				switch (i.customId) {
				case 'sign':

					if (i.user.id === kitten) {
						await interaction.editReply({ content: signedcontract });
						contractNumber++;

						let contractName = 'Contract ' + ccName + ' - ' + kittenName + ' (' + contractNumber + ')' + '.txt';

						if (fs.existsSync(`./${contractName}`)) {

						while (fs.existsSync(`./${contractName}`))
						{
							contractNumber++
							let contractName = 'Contract ' + ccName + ' - ' + kittenName + ' (' + contractNumber + ')' + '.txt';

							if (!fs.existsSync(`./${contractName}`)) {

							fs.appendFile(contractName,signedcontract, err => {
								if (err) {
								  console.error(err)
								  return
								}
							})

							await interaction.followUp({ content: `Your contract has been logged to ${contractName}. Ask <@${224258146078556160}> (AlexMango#6583) for the log!` });

							collector.on('end', (collected) => console.log(`Collected ${collected.size} items`));

							break;
						}
						}
						}
					
						else {
							fs.appendFile(contractName,signedcontract, err => {
								if (err) {
								  console.error(err)
								  return
								}
							})

							await interaction.followUp({ content: `Your contract has been logged to ${contractName}. Ask <@${224258146078556160}> (AlexMango#6583) for the log!` });

							collector.on('end', (collected) => console.log(`Collected ${collected.size} items`));

						}
					}

					else {
						await interaction.followUp({ content: `Only <@${kitten}> can sign!` });
					}

					break;
				}
			});

			collector.on('end', (collected) => console.log(`Collected ${collected.size} items`));
		}
	},

	data: new SlashCommandBuilder()
		.setName('kittencontract')
		.setDescription('Send a kitten contract to someone!!')
		.addUserOption((option) => option.setName('kitten').setDescription('Choose a kitten').setRequired(true)),
};

