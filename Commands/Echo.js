/* eslint-disable no-unused-vars */
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection, Intents, TextChannel } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const wait = require('util').promisify(setTimeout);

module.exports =
{
	async execute(interaction) {

		if (interaction.guild.id == '900521414933757983') {
			const users = [
				'224258146078556160',
				'288305821090316288',
				'454051127013670913',
				'663237770105585701',
				'559675617503739904',
				'413894851872948226',
			];
	
			if (users.includes(interaction.user.id)) {
				const string = interaction.options.getString('message');
				const channel = interaction.options.getChannel('channel');
				const attachment = interaction.options.getAttachment('attachment');
				// const channel = interaction.client.channels.cache.get('900521416020074537');
				const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });
	
				if (!string) {
					interaction.reply({ ephemeral: true, content: 'You need to add a message!' });
				}
	
				else {
					const avatarEmbed = new MessageEmbed()
						.setColor('#6600ff')
						.setTitle('Echo')
						.setDescription('Thank your for your message!')
						.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
						.setFooter(`${interaction.user.username} sent a message`, avatar, true)
						.setTimestamp();
	
					if (!attachment) {
						await channel.send(string);
					}
	
					else {
						await channel.send(`${string} ` + attachment.attachment);
	
						console.log(attachment.url);
					}
	
					await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
				}
			}
	
			else if (interaction.user.id === '203919579561459712') {
				interaction.reply({ ephemeral: false, content: 'Lmao <@203919579561459712> you dumbass you cant use the bot!' });
			}
	
			else {
				interaction.reply({ ephemeral: true, content: 'You can\'t use this command!' });
			}
		}

		else if (interaction.guild.id == '905992931868037140') {
			
				const string = interaction.options.getString('message');
				const channel = interaction.options.getChannel('channel');
				const attachment = interaction.options.getAttachment('attachment');
				// const channel = interaction.client.channels.cache.get('900521416020074537');
				const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });
				const guildMember = interaction.member;
				
				const Channels = [
					'906013136342110209',
					'906012346965712927',
					'906286723829497887',
					'906746380645707867',
					'906884214052487200',	
					];

				let hasRole = guildMember.roles.cache.has('1016905246812946493');
				let StaffChannel = Channels.includes(channel.id);
	
				if (!string) {
					interaction.reply({ ephemeral: true, content: 'You need to add a message!' });
				}

				else if (!hasRole && StaffChannel) {
					interaction.reply({ ephemeral: true, content: 'You need to choose a channel not in the announcements section!' });
				}
	
				else {
					const avatarEmbed = new MessageEmbed()
						.setColor('#6600ff')
						.setTitle('Echo')
						.setDescription('Thank your for your message!')
						.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
						.setFooter(`${interaction.user.username} sent a message`, avatar, true)
						.setTimestamp();
	
					if (!attachment) {
						await channel.send(string);
					}
	
					else {
						await channel.send(`${string} ` + attachment.attachment);
	
						console.log(attachment.url);
					}
	
					await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
				}
		}

		else if (interaction.guild.id == '782650556153331753') {

			const string = interaction.options.getString('message');
			const channel = interaction.options.getChannel('channel');
			const attachment = interaction.options.getAttachment('attachment');
			// const channel = interaction.client.channels.cache.get('900521416020074537');
			const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });
			const guildMember = interaction.member;
			
			const Channels = [
				'782687487490916364',
				'782654317437517845',
				'782653799621722142',
				'782653994728292352',
				'954438163353464882',	
				];

			let hasRole = guildMember.roles.cache.has('782651535137832980');
			let StaffChannel = Channels.includes(channel.id);

			if (!string) {
				interaction.reply({ ephemeral: true, content: 'You need to add a message!' });
			}

			else if (!hasRole && StaffChannel) {
				interaction.reply({ ephemeral: true, content: 'You need to choose a channel not in the Important Things section!' });
			}

			else {
				const avatarEmbed = new MessageEmbed()
					.setColor('#6600ff')
					.setTitle('Echo')
					.setDescription('Thank your for your message!')
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.setFooter(`${interaction.user.username} sent a message`, avatar, true)
					.setTimestamp();

				if (!attachment) {
					await channel.send(string);
				}

				else {
					await channel.send(`${string} ` + attachment.attachment);

					console.log(attachment.url);
				}

				await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
			}
		}

		else if (interaction.guild.id == '931700052706066462') {

			const string = interaction.options.getString('message');
			const channel = interaction.options.getChannel('channel');
			const attachment = interaction.options.getAttachment('attachment');
			// const channel = interaction.client.channels.cache.get('900521416020074537');
			const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });
			const guildMember = interaction.member;
			
			const Channels = [
				'931705702114791516',
				'931705739125329940',
				'931704646853079060',
				'931739429360513054',
				'931707186307022950',
				'931713248674349056',
				];

			let hasRole = guildMember.roles.cache.has('931701989518233660');
			let StaffChannel = Channels.includes(channel.id);

			if (!string) {
				interaction.reply({ ephemeral: true, content: 'You need to add a message!' });
			}

			else if (!hasRole && StaffChannel) {
				interaction.reply({ ephemeral: true, content: 'You need to choose a channel not in the Important section!' });
			}

			else {
				const avatarEmbed = new MessageEmbed()
					.setColor('#6600ff')
					.setTitle('Echo')
					.setDescription('Thank your for your message!')
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.setFooter(`${interaction.user.username} sent a message`, avatar, true)
					.setTimestamp();

				if (!attachment) {
					await channel.send(string);
				}

				else {
					await channel.send(`${string} ` + attachment.attachment);

					console.log(attachment.url);
				}

				await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
			}
		}

		else if (interaction.guild.id == '1017827846011490404') {

			const string = interaction.options.getString('message');
			const channel = interaction.options.getChannel('channel');
			const attachment = interaction.options.getAttachment('attachment');
			// const channel = interaction.client.channels.cache.get('900521416020074537');
			const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });
			const guildMember = interaction.member;
			
			const Channels = [
				'1017827846711951466',
				'1017827846514823275',
				'1017827846514823276',
				'1017827846514823278',
				'1017827846711951461',
				];

			let hasRole = guildMember.roles.cache.has('1017827846082801728');
			let StaffChannel = Channels.includes(channel.id);

			if (!string) {
				interaction.reply({ ephemeral: true, content: 'You need to add a message!' });
			}

			else if (!hasRole && StaffChannel) {
				interaction.reply({ ephemeral: true, content: 'You need to choose a channel that\'s not in the Important section, and that you can\'t talk in!' });
			}

			else {
				const avatarEmbed = new MessageEmbed()
					.setColor('#6600ff')
					.setTitle('Echo')
					.setDescription('Thank your for your message!')
					.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
					.setFooter(`${interaction.user.username} sent a message`, avatar, true)
					.setTimestamp();

				if (!attachment) {
					await channel.send(string);
				}

				else {
					await channel.send(`${string} ` + attachment.attachment);

					console.log(attachment.url);
				}

				await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
			}
		}

		else {
			await interaction.reply({ ephemeral: true, content: `This command is disabled on this server! Ask <@${224258146078556160}> (AlexMango#6583) to add it here!` });
		}
		
	},

	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Echo a message!')
		.addChannelOption((option) => option.setName('channel').setDescription('Select a channel').setRequired(true))
		.addStringOption((option) => option.setName('message').setDescription('Enter your message!').setRequired(true))
		.addAttachmentOption((option) => option.setName('attachment').setDescription('Add an attachment')),
};
