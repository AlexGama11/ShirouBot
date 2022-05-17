const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction, GuildMemberRoleManager, MessageActionRow, MessageButton } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {

		let guildMember = interaction.member;
		let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

		const rolesEmbed = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Choose your role`)
			.setDescription('Choose between Nonce and Certified L Taker')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.addField(`Nonce`, 'For nonces and british people (like casuaL and grape)', true)
			.addField(`Certified L Taker`, 'For Gui (pronounced Gay)', true)
			.setFooter(`${interaction.user.username} is getting a role`, avatar, true)
			.setTimestamp()

		const rolesEmbedGranted = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Role Granted`)
			.setDescription('A role has been granted!')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.addField(`Role Granted!`, '\u200b', false)
			.setFooter(`${interaction.user.username} received a role`, avatar, true)
			.setTimestamp()

		const rolesEmbedRemoved = new MessageEmbed()
			.setColor('#8e5539')
			.setTitle(`Role Removed`)
			.setDescription('A role has been removed!')
			.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
			.addField(`Role Removed!`, '\u200b', false)
			.setFooter(`${interaction.user.username} removed a role`, avatar, true)
			.setTimestamp()

		//================================================================================================================================//


		const roles = new MessageActionRow()
		.addComponents(
			new MessageButton()
				.setCustomId('nonce')
				.setLabel('Nonce')
				.setStyle('SECONDARY'),
		)
		.addComponents(
			new MessageButton()
				.setCustomId('idolfan')
				.setLabel('Certified L taker')
				.setStyle('SECONDARY'),
		)


		await interaction.reply({ ephemeral: true, embeds: [rolesEmbed], components: [roles] });

		const filter = i => i.user.id === interaction.user.id;

		const collector = interaction.channel.createMessageComponentCollector({ filter, time: 60000 });

		collector.on('collect', async i => {

			switch (i.customId)
			{

				case "nonce":
					if (guildMember.roles.cache.some(role => role.id === '951181361773953044')){
						guildMember.roles.remove(['951181361773953044']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [roles] });
					}
					else {
						guildMember.roles.add(['951181361773953044']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [roles] });
					}
					break;

				case "idolfan":
					if (guildMember.roles.cache.some(role => role.id === '956327307797225493')) {
						guildMember.roles.remove(['956327307797225493']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedRemoved], components: [roles] });
					}
					else {
						guildMember.roles.add(['956327307797225493']);
						await i.update({ ephemeral: true, embeds: [rolesEmbedGranted], components: [roles] });
                    }
					break;

            }

		});

		collector.on('end', collected => console.log(`Collected ${collected.size} items`));

	},

	data: new SlashCommandBuilder()
		.setName('getrole')
		.setDescription('Get or remove a role!')
};