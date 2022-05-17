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

            await channel.send(`${interaction.user.username} sent a modmail: ${string}`);

            await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
        }

    },

    data: new SlashCommandBuilder()
        .setName('modmail')
        .setDescription('Send a message to the mods!')
       .addStringOption(option => option.setName('message').setDescription('Enter your message!'))
};