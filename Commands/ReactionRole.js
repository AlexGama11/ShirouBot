const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Client, Collection, ComponentType, EmbedBuilder, GatewayIntentBits, SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMembers] });
const dotenv = require('dotenv').config();

module.exports =
{
	async execute(interaction) {

        const avatar = interaction.member.displayAvatarURL({ dynamic: true, size: 1024 });
        const buttonColor = interaction.options.getString('buttoncolor')
        const role1 = interaction.options.getRole('role1');
        const role2 = interaction.options.getRole('role2');
        const role3 = interaction.options.getRole('role3');
        const role4 = interaction.options.getRole('role4');
        const role5 = interaction.options.getRole('role5');

        const roleArray = [role1, role2, role3, role4, role5];

        let finalRoleArray = [];

        const button = new ActionRowBuilder()

        for (let i = 0; i < roleArray.length; i++)
        {
        
                if (roleArray[i] != null)
                {
                        if (interaction.guild.members.me.roles.highest.position < roleArray[i].position)
                        {
                                const locales = {
                                        "pt-BR": `O meu cargo mais alto está abaixo de ${roleArray[i].name}. Não o consigo dar!`,
                                };

                                await interaction.reply({content: locales[interaction.locale] ?? `My highest role is below ${roleArray[i].name}. I can't give it!`});
                                return;
                        }

                        else   
                        {
                                button.addComponents(
                                        new ButtonBuilder()
                                            .setCustomId(`${roleArray[i].name}`)
                                            .setLabel(`${roleArray[i].name}`)
                                            .setStyle(buttonColor),
                                    )
                                
                                finalRoleArray.push(roleArray[i]);
                        }


                }
        }

        const titleLocales = {
                "pt-BR": 'Cargos de Reação!',
        };

        const descriptionLocales = {
                "pt-BR": `Reage para receber um dos cargos aqui!`,
        };

        const footerLocales = {
                "pt-BR": `${interaction.user.username} quer que vocês escolham cargos!`,
        };

        const messageEmbed = new EmbedBuilder()
		.setColor('#6600ff')
		.setTitle(titleLocales[interaction.locale] ?? 'Reaction Roles!')
		.setDescription(descriptionLocales[interaction.locale] ?? 'React to receive one of the roles here!')
		.setThumbnail('https://cdn.discordapp.com/attachments/736236169293070396/975810146112524388/unknown.png?size=4096')
		.setFooter({text: footerLocales[interaction.locale] ?? `${interaction.user.username} wants you to choose roles!`, iconURL: avatar})
		.setTimestamp();

                await interaction.reply({ ephemeral: false, embeds: [messageEmbed], components: [button] });

        const collector = await interaction.channel.createMessageComponentCollector({ componentType: ComponentType.Button});

        collector.on('collect', async (i) => {

                const member = i.member;

                for (let p = 0; p < finalRoleArray.length; p++)
                {
                        if (i.customId === finalRoleArray[p].name)
                        {
                                if (member.roles.cache.has(finalRoleArray[p].id))
                                {
                                        const locales = {
                                                "pt-BR": `Tu agora já não tens o cargo: ${finalRoleArray[p].name}!`,
                                        };
        
                                        member.roles.remove(finalRoleArray[p]);
                                        await interaction.followUp({content: locales[interaction.locale] ?? `You now don't have the ${finalRoleArray[p].name} role anymore!`, ephemeral: true});
                                }

                                else
                                {
                                        const locales = {
                                                "pt-BR": `Tu agora tens o cargo: ${finalRoleArray[p].name}!`,
                                        };
        
                                        member.roles.add(finalRoleArray[p]);
                                        await interaction.followUp({content: locales[interaction.locale] ?? `You now have the ${finalRoleArray[p].name} role!`, ephemeral: true});
                                }

                                p = finalRoleArray.length + 1;
                        }
                }

        })
	},

	data: new SlashCommandBuilder()
	.setName('reactionrole').setNameLocalizations({ "pt-BR": 'cargosdereação', })
	.setDescription('gives a role based on people\'s reactions!').setDescriptionLocalizations({ "pt-BR": 'Dá um cargo a utilizadores baseado na sua reação!', })
        .addStringOption(option => option.setName('buttoncolor').setNameLocalizations({ "pt-BR": 'cordosbutões', }).setDescription('choose the button color for the role buttons').setDescriptionLocalizations({ "pt-BR": 'Escolhe a cor do butão para este cargo', }).setRequired(true).addChoices({ name: 'Blue', value: 'Primary' },{ name: 'Grey', value: 'Secondary' },{ name: 'Green', value: 'Success' },{ name: 'Red', value: 'Danger' }))
        .addRoleOption(option => option.setName('role1').setNameLocalizations({ "pt-BR": 'cargo1', }).setDescription('Choose a role to give!').setDescriptionLocalizations({ "pt-BR": 'Escolhe um cargo para dar!', }).setRequired(true))
        .addRoleOption(option => option.setName('role2').setNameLocalizations({ "pt-BR": 'cargo2', }).setDescription('Choose a role to give!').setDescriptionLocalizations({ "pt-BR": 'Escolhe um cargo para dar!', }))
        .addRoleOption(option => option.setName('role3').setNameLocalizations({ "pt-BR": 'cargo3', }).setDescription('Choose a role to give!').setDescriptionLocalizations({ "pt-BR": 'Escolhe um cargo para dar!', }))
        .addRoleOption(option => option.setName('role4').setNameLocalizations({ "pt-BR": 'cargo4', }).setDescription('Choose a role to give!').setDescriptionLocalizations({ "pt-BR": 'Escolhe um cargo para dar!', }))
        .addRoleOption(option => option.setName('role5').setNameLocalizations({ "pt-BR": 'cargo5', }).setDescription('Choose a role to give!').setDescriptionLocalizations({ "pt-BR": 'Escolhe um cargo para dar!', }))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
};