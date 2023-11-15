const { SlashCommandBuilder, AttachmentBuilder, EmbedBuilder, Client, Collection, GatewayIntentBits, TextChannel } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('seiba')
        .setDescription('replies with seiba img'),

    async execute(interaction) {

        const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });

        const fetchingEmbed = new EmbedBuilder()
						    .setColor('#d48aff')
						    .setTitle('Fetching Seiba...')
						    .setDescription('Wait a second...')
						    .setThumbnail('https://cdn.discordapp.com/attachments/1153467954948743262/1155186004840431877/Alpha_Seiba.png')
						    .setFooter({text: `${interaction.user.username} asked for seiba`, iconURL: avatar})
						    .setTimestamp();
	

        await interaction.reply({embeds: [fetchingEmbed]});

        const seibaArray = [];

        fs.readdirSync('./saber images/').forEach((file) => seibaArray.push(file));

        const seibaValue = Math.floor(Math.random() * seibaArray.length); // Gets a random value from the array's length
        const seibaImage = seibaArray[seibaValue]; // Gives us the random image.

        const attachment = new AttachmentBuilder(`./saber images/${seibaImage}`, { name: 'seiba.png'})

        const seibaEmbed = new EmbedBuilder()
        .setColor('#d48aff')
        .setTitle('Seiba')
        .setDescription('Posting')
        .setImage('attachment://seiba.png')
        .setFooter({text: `${interaction.user.username} seibaposted`, iconURL: avatar})
        .setTimestamp();

        await interaction.editReply({embeds: [seibaEmbed], files: [attachment]});

        //console.log(attachment);

        //console.log(`./saber images/${seibaImage}`);

        //console.log(seibaArray.length);
        
    },

};