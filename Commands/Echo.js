const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require("discord.js");
const { Client, Collection, Intents, TextChannel } = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const wait = require('util').promisify(setTimeout);

module.exports =
{
    async execute(interaction) {

        if (interaction.user.id === '224258146078556160' || interaction.user.id === '288305821090316288' || interaction.user.id == '454051127013670913'  || interaction.user.id == '663237770105585701') {
        const string = interaction.options.getString('message');
        const channel = interaction.options.getChannel('channel');
        const attachment = interaction.options.getAttachment('attachment');
        //const channel = interaction.client.channels.cache.get('900521416020074537');
        let avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

        if (!string) {
            interaction.reply({ ephemeral: true, content: 'You need to add a message!' });
        }

        else {
            const avatarEmbed = new MessageEmbed()
                .setColor('#6600ff')
                .setTitle(`Echo`)
                .setDescription('Thank your for your message!')
                .setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
                .setFooter(`${interaction.user.username} sent a message`, avatar, true)
                .setTimestamp()

                if (!attachment)
                {
                    await channel.send(string);
                }

                else
                {
                    await channel.send(`${string} ` + attachment.attachment);

                    console.log(attachment.url)
                }

            await interaction.reply({ ephemeral: true, embeds: [avatarEmbed] });
        }

    }

    else
    {
        interaction.reply({ ephemeral: true, content: `You can't use this command!`});
    }

    },

    data: new SlashCommandBuilder()
        .setName('echo')
        .setDescription('Echo a message!')
        .addChannelOption(option => option.setName('channel').setDescription('Select a channel').setRequired(true))
        .addStringOption(option => option.setName('message').setDescription('Enter your message!').setRequired(true))
        .addAttachmentOption(option => option.setName('attachment').setDescription('Add an attachment'))
};