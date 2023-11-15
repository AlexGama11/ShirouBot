const { SlashCommandBuilder, EmbedBuilder, Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });
const dotenv = require('dotenv').config();

module.exports =
{
	async execute(interaction) {

        const user = interaction.options.getUser('target');

        const id = user.id;

        const authorID = interaction.user.id;

        const randomValue = Math.floor(Math.random() * 100);

        const locales = {
			"pt-BR": `A compatibilidade entre <@${id}> e <@${authorID}> é ${randomValue}%!`,
		};

        await interaction.reply({ ephemeral: false, content: locales[interaction.locale] ?? `The compatibility between <@${id}> and <@${authorID}> is ${randomValue}%!` });

        if (randomValue == 100)
        {
            const locales100 = {
                "pt-BR": `Parabéns, vocês são 100% compativeis!`,
            };

            await interaction.followUp({ephemeral: false, content: locales100[interaction.locale] ?? `Congrats! You guys are 100% compatible!!!`});
        }
       
	},

	data: new SlashCommandBuilder()
		.setName('lovecompatibility').setNameLocalizations({ "pt-BR": 'compatibilidadeamorosa', })
		.setDescription('check\'s your compatibility with others!').setDescriptionLocalizations({ "pt-BR": 'Vê a tua compatibilidade com outros!', })
        .addUserOption((option) => option.setName('target').setNameLocalizations({ "pt-BR": 'alvo', }).setDescription('Select a user to check your compatibility with them!').setDescriptionLocalizations({ "pt-BR": 'Seleciona um utilizador para ver a tua compatibilidade com eles!', }).setRequired(true)),
};