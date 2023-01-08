const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const { Client, Collection, Intents, TextChannel } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const wait = require('util').promisify(setTimeout);
const dotenv = require('dotenv').config();

module.exports =
{
	async execute(interaction) {

		if (interaction.guild.id == '900521414933757983') {
		const string = interaction.options.getString('message');
		const channel = interaction.client.channels.cache.get('951531506562650134');
		const attachment = interaction.options.getAttachment('attachment');
		const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

		if (!string) {
			interaction.reply({ ephemeral: true, content: 'Send a message to the mods!' });
		}

		else {
			const avatarEmbed = new MessageEmbed()
				.setColor('#6600ff')
				.setTitle('ModMail')
				.setDescription('Thank your for your message, the staff will review it shortly!')
				.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
				.setFooter(`${interaction.user.username} sent modmail`, avatar, true)
				.setTimestamp();

			if (!attachment) {
				await channel.send(`${interaction.user.username} sent a modmail: ${string}`);
			}

			else {
				await channel.send(`${interaction.user.username} sent a modmail: ${string} ` + attachment.attachment);

				console.log(attachment.url);
			}

			await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
		}

	}

	else if (interaction.guild.id == '905992931868037140') {
		const string = interaction.options.getString('message');
		const channel = interaction.client.channels.cache.get('906016534831460432');
		const attachment = interaction.options.getAttachment('attachment');
		const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

		if (!string) {
			interaction.reply({ ephemeral: true, content: 'Send a message to the mods!' });
		}

		else {
			const avatarEmbed = new MessageEmbed()
				.setColor('#6600ff')
				.setTitle('ModMail')
				.setDescription('Thank your for your message, the staff will review it shortly!')
				.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
				.setFooter(`${interaction.user.username} sent modmail`, avatar, true)
				.setTimestamp();

			if (!attachment) {
				await channel.send(`${interaction.user.username} sent a modmail: ${string}`);
			}

			else {
				await channel.send(`${interaction.user.username} sent a modmail: ${string} ` + attachment.attachment);

				console.log(attachment.url);
			}

			await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
		}
	}

	else if (interaction.guild.id == '782650556153331753') {
		const string = interaction.options.getString('message');
		const channel = interaction.client.channels.cache.get('840615226256392244');
		const attachment = interaction.options.getAttachment('attachment');
		const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

		if (!string) {
			interaction.reply({ ephemeral: true, content: 'Send a message to the mods!' });
		}

		else {
			const avatarEmbed = new MessageEmbed()
				.setColor('#6600ff')
				.setTitle('ModMail')
				.setDescription('Thank your for your message, the staff will review it shortly!')
				.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
				.setFooter(`${interaction.user.username} sent modmail`, avatar, true)
				.setTimestamp();

			if (!attachment) {
				await channel.send(`${interaction.user.username} sent a modmail: ${string}`);
			}

			else {
				await channel.send(`${interaction.user.username} sent a modmail: ${string} ` + attachment.attachment);

				console.log(attachment.url);
			}

			await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
		}
	}

	else if (interaction.guild.id == '931700052706066462') {
		const string = interaction.options.getString('message');
		const channel = interaction.client.channels.cache.get('931713248674349056');
		const attachment = interaction.options.getAttachment('attachment');
		const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

		if (!string) {
			interaction.reply({ ephemeral: true, content: 'Send a message to the mods!' });
		}

		else {
			const avatarEmbed = new MessageEmbed()
				.setColor('#6600ff')
				.setTitle('ModMail')
				.setDescription('Thank your for your message, the staff will review it shortly!')
				.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
				.setFooter(`${interaction.user.username} sent modmail`, avatar, true)
				.setTimestamp();

			if (!attachment) {
				await channel.send(`${interaction.user.username} sent a modmail: ${string}`);
			}

			else {
				await channel.send(`${interaction.user.username} sent a modmail: ${string} ` + attachment.attachment);

				console.log(attachment.url);
			}

			await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
		}
	}

	else if (interaction.guild.id == '1017827846011490404') {
		const string = interaction.options.getString('message');
		const channel = interaction.client.channels.cache.get('1017827846711951466');
		const attachment = interaction.options.getAttachment('attachment');
		const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

		if (!string) {
			interaction.reply({ ephemeral: true, content: 'Send a message to the mods!' });
		}

		else {
			const avatarEmbed = new MessageEmbed()
				.setColor('#6600ff')
				.setTitle('ModMail')
				.setDescription('Thank your for your message, the staff will review it shortly!')
				.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
				.setFooter(`${interaction.user.username} sent modmail`, avatar, true)
				.setTimestamp();

			if (!attachment) {
				await channel.send(`${interaction.user.username} sent a modmail: ${string}`);
			}

			else {
				await channel.send(`${interaction.user.username} sent a modmail: ${string} ` + attachment.attachment);

				console.log(attachment.url);
			}

			await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
		}
	}

	else {

		const locales = {
			"pt-BR": `O comando ainda não está disponível neste server! Pede ao <@${224258146078556160}> (AlexMango#6583) para adicioná-lo aqui!`,
		};


		await interaction.reply({ ephemeral: true, content: locales[interaction.locale] ?? `This command is disabled on this server! Ask <@${224258146078556160}> (AlexMango#6583) to add it here!` });
	}

	},

	data: new SlashCommandBuilder()
		.setName('modmail').setNameLocalizations({ "pt-BR": 'correioparamods', })
		.setDescription('Send a message to the mods!').setDescriptionLocalizations({ "pt-BR": 'Manda uma mensagem aos moderadores!', })
		.addStringOption((option) => option.setName('message').setNameLocalizations({ "pt-BR": 'mensagem', }).setDescription('Enter your message!').setRequired(true).setDescriptionLocalizations({ "pt-BR": 'Escreve a tua mensagem!', }))
		.addAttachmentOption((option) => option.setName('attachment').setNameLocalizations({ "pt-BR": 'ficheiro', }).setDescription('Add an attachment').setDescriptionLocalizations({ "pt-BR": 'Adiciona um ficheiro', })),
};
