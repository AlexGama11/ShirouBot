const fs = require('fs');
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

module.exports =
{
    async execute(interaction) {

        let avatar = interaction.user.displayAvatarURL({ dynamic: true, size: 1024 });

        let str = [];
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

        const helpEmbed = new MessageEmbed()
            .setColor('#73c0f9')
            .setTitle(`Help Command`)
            .setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
            .setFooter(`${interaction.user.username} requested a list of all the commands`, avatar, true)
            .setTimestamp()

        for (const file of commandFiles) {
            const command = require(`./${file}`);
            //prints with js
            var fileName = file.substr(0, file.lastIndexOf('.')) || file;
            str += `${fileName} \n`;
        }

        helpEmbed.addField(str, `Here's the list of all the commands Shirou can do`, true)

        await interaction.reply({ embeds: [helpEmbed] });

    },

    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all commands shirou can do!')
}