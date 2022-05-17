const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents, TextChannel } = require("discord.js");
const client = new Client({ partials: ["CHANNEL"], intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGES] });
const wait = require('util').promisify(setTimeout);

module.exports =
{
    async execute(interaction) {

        //const guild = interaction.client.guilds.fetch("900521414933757983");
        const string = interaction.options.getString('message');
        const alex = await interaction.client.users.fetch('224258146078556160');
        let avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

        if (!string) {
            interaction.reply({ ephemeral: true, content: 'You need to write a message!' });
        }

        else {
            const avatarEmbed = new MessageEmbed()
                .setColor('#6600ff')
                .setTitle(`Suggestion`)
                .setDescription('Thank your for your suggestion, Alex will review it when he can!')
                .setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
                .setFooter(`${interaction.user.username} sent a suggestion`, avatar, true)
                .setTimestamp()

            await alex.send(`${interaction.user.username} sent a suggestion: ${string}`);

            await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
        }

    },

    data: new SlashCommandBuilder()
        .setName('suggestions')
        .setDescription('Send a suggestion to Alex!')
       .addStringOption(option => option.setName('message').setDescription('Enter your message!'))
};