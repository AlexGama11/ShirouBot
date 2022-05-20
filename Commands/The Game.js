const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Interaction } = require("discord.js");
const { Client, Collection, Intents, TextChannel } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const wait = require('util').promisify(setTimeout);
const cooldown = new Set();

module.exports =
{
    async execute(interaction) {

        const cooldownTime = 172800000;

        if (cooldown.has(interaction.user))
        {
            interaction.reply({ ephemeral: true, content: 'The command has a cooldown of 48 hours!' });

            console.log(cooldown, cooldownTime);
        }

        else
        {
            // 172800000 = 48 hours
            // 900521416020074537 = 1984
            const channel = interaction.client.channels.cache.get('900521416020074537');
            let avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

            const avatarEmbed = new MessageEmbed()
                .setColor('#6600ff')
                .setTitle(`The Game`)
                .setDescription('The Game')
                .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/1/1a/TheGameGifRhadamanthine.gif')
                .setFooter(`${interaction.user.username} reminded everyone of the game`, avatar, true)
                .setTimestamp()

            await channel.send(`${interaction.user.username} wanted to remind everyone of the game @here ` + `https://upload.wikimedia.org/wikipedia/commons/1/1a/TheGameGifRhadamanthine.gif`);

            await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });     
            
            cooldown.add(interaction.user);

            setTimeout(() => { cooldown.delete(interaction.user); }, cooldownTime);

            console.log(cooldown, cooldownTime);
        }
    },

    data: new SlashCommandBuilder()
        .setName('thegame')
        .setDescription('The Game')
};