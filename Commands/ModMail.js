const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents, TextChannel } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const wait = require('util').promisify(setTimeout);

module.exports =
{
    async execute(interaction) {

        const string = interaction.options.getString('message');
        const channel = interaction.client.channels.cache.get('951531506562650134');
        const attachment = interaction.options.getAttachment('attachment');
        let avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

        if (!string) {
            interaction.reply({ ephemeral: true, content: 'Send a message to the mods!' });
        }

        else {
            const avatarEmbed = new MessageEmbed()
                .setColor('#6600ff')
                .setTitle(`ModMail`)
                .setDescription('Thank your for your message, the staff will review it shortly!')
                .setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
                .setFooter(`${interaction.user.username} sent modmail`, avatar, true)
                .setTimestamp()

            if (!attachment)
            {
                await channel.send(`${interaction.user.username} sent a modmail: ${string}`);
            }

            else
            {
                await channel.send(`${interaction.user.username} sent a modmail: ${string} ` + attachment.attachment);

                console.log(attachment.url)
            }

            await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
        }

    },

    data: new SlashCommandBuilder()
        .setName('modmail')
        .setDescription('Send a message to the mods!')
        .addStringOption(option => option.setName('message').setDescription('Enter your message!').setRequired(true))
        .addAttachmentOption(option => option.setName('attachment').setDescription('Add an attachment'))
};