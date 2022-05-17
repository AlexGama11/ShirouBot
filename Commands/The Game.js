const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents, TextChannel } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const wait = require('util').promisify(setTimeout);

module.exports =
{
    async execute(interaction) {

       // const guild = interaction.client.guilds.fetch("900521414933757983");
        const channel = interaction.client.channels.cache.get('900521416020074537');
       // const everyone = await interaction.guild.roles.fetch("@everyone");
        let avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

            const avatarEmbed = new MessageEmbed()
                .setColor('#6600ff')
                .setTitle(`The Game`)
                .setDescription('The Game')
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/1/1a/TheGameGifRhadamanthine.gif')
                .setFooter(`${interaction.user.username} reminded everyone of the game`, avatar, true)
                .setTimestamp()

            await channel.send(`${interaction.user.username} wanted to remind @here of the game ` + `https://upload.wikimedia.org/wikipedia/commons/1/1a/TheGameGifRhadamanthine.gif`);

            await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });

    },

    data: new SlashCommandBuilder()
        .setName('thegame')
        .setDescription('The Game')
};