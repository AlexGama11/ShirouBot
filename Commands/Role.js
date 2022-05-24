const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction, GuildMemberRoleManager, MessageActionRow, MessageButton, GuildMember } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
	async execute(interaction) {

		let user = interaction.options.getUser('mentioneduser')

		if (!user)
		{
				let guildMember = interaction.member;
				let role = interaction.options.getRole('role');
			    const forbiddenroleIDs = [
				'900523590691196978',
				'900527017286594581',
				'932039332578099252',
				'932680097327108107',
				'958114560596926567',
				'967540844821381123',
				'900528209597198368',
				'912481173127716865',
				'903723380610572318',
				'967821742770888844',
				'975121902467186768',
				'900523359853494314'
				// roles here
			  	]
				let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });
	
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

				const rolesEmbedError = new MessageEmbed()
					.setColor('#8e5539')
					.setTitle(`There was an error!`)
					.setDescription(`Please contact Alex, or use the suggest command with an attachment!`)
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.setFooter(`${interaction.user.username} caused the bot to have an error!`, avatar, true)
					.setTimestamp()
	
				//================================================================================================================================//

				if (forbiddenroleIDs.includes(role.id))
				{
					interaction.reply({ ephemeral: true, content: `You can't yourself ${role.name}, if you want to get it, talk to <@224258146078556160> and <@203919579561459712>!`});
					console.log(role.name)
				}

				else 
				{
					if (guildMember.roles.cache.has(role.id))
					{
						guildMember.roles.remove(role.id);
						await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedRemoved]});
					}

					else if (!guildMember.roles.cache.has(role.id))
					{
						guildMember.roles.add(role.id);
						await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedGranted] });
					}

					else
					{
						await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedError] })
					}
				}
		}


		else
		{
			let member = interaction.options.getMember('mentioneduser');
			let role = interaction.options.getRole('role');
			const forbiddenroleIDs = [
				'900523590691196978',
				'900527017286594581',
				'932039332578099252',
				'932680097327108107',
				'958114560596926567',
				'967540844821381123',
				'900528209597198368',
				'912481173127716865',
				'903723380610572318',
				'967821742770888844',
				'975121902467186768',
				'900523359853494314'
				// roles here
			  ]
			
			if (forbiddenroleIDs.includes(role.id))
			{
				interaction.reply({ ephemeral: true, content: `You can't give ${role.name}, if you want to get it, talk to <@224258146078556160> and <@203919579561459712>!`});
				console.log(role.name)
			}
			
			else if (interaction.user.id === `224258146078556160`)
			{
				let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

				const rolesEmbedGranted = new MessageEmbed()
					.setColor('#8e5539')
					.setTitle(`Role Granted`)
					.setDescription('A role has been granted!')
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.addField(`Role Granted!`, '\u200b', false)
					.setFooter(`${user.username} received a role`, avatar, true)
					.setTimestamp()

				const rolesEmbedRemoved = new MessageEmbed()
					.setColor('#8e5539')
					.setTitle(`Role Removed`)
					.setDescription('A role has been removed!')
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.addField(`Role Removed!`, '\u200b', false)
					.setFooter(`${interaction.user.username} removed a role from ${user.username}`, avatar, true)
					.setTimestamp()

				const rolesEmbedError = new MessageEmbed()
					.setColor('#8e5539')
					.setTitle(`There was an error, this role has either already been removed or granted!`)
					.setDescription(`Please contact Alex, or use the suggest command with an attachment!`)
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.setFooter(`${interaction.user.username} caused the bot to have an error!`, avatar, true)
					.setTimestamp()

				//================================================================================================================================//

				if (member.roles.cache.has(role.id))
				{
					member.roles.remove(role.id);
					await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedRemoved] });
				}

				else if (!member.roles.cache.has(role.id))
				{
					member.roles.add(role.id);
					await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedGranted] });
				}

				else
				{
					await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedError] })
				}
			}

			else if (user.id === '692585507384983622')
				{
					interaction.reply({ ephemeral: true, content: `You can't use this command on the bot!`});
					console.log(user.id);
			}

			else
				{
				let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

				const rolesEmbedGranted = new MessageEmbed()
					.setColor('#8e5539')
					.setTitle(`Role Granted`)
					.setDescription('A role has been granted!')
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.addField(`Role Granted!`, '\u200b', false)
					.setFooter(`${user.username} received a role`, avatar, true)
					.setTimestamp()

				const rolesEmbedRemoved = new MessageEmbed()
					.setColor('#8e5539')
					.setTitle(`Role Removed`)
					.setDescription('A role has been removed!')
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.addField(`Role Removed!`, '\u200b', false)
					.setFooter(`${interaction.user.username} removed a role from ${user.username}`, avatar, true)
					.setTimestamp()

				const rolesEmbedError = new MessageEmbed()
					.setColor('#8e5539')
					.setTitle(`There was an error, this role has either already been removed or granted!`)
					.setDescription(`Please contact Alex, or use the suggest command with an attachment!`)
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.setFooter(`${interaction.user.username} caused the bot to have an error!`, avatar, true)
					.setTimestamp()

				//================================================================================================================================//

				if (member.roles.cache.has(role.id))
				{
					member.roles.remove(role.id);
					await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedRemoved] });
				}

				else if (!member.roles.cache.has(role.id))
				{
					member.roles.add(role.id);
					await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedGranted] });
				}

				else
				{
					await interaction.reply ({ ephemeral: true, embeds: [rolesEmbedError] })
				}
			}

    }

	},

	data: new SlashCommandBuilder()
		.setName('role')
		.setDescription(`Manage your own roles or someone else's`)
		.addRoleOption(option => option.setName('role').setDescription('Choose a role to give!').setRequired(true))
		.addUserOption(option => option.setName('mentioneduser').setDescription('Choose someone to give or remove a role'))
};