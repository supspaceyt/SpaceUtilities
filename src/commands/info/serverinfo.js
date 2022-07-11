module.exports = ({
    name: "serverinfo",
    $if: "v4",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{color:RANDOM}{author:$serverName[$guildID]:$serverIcon[$guildID]}{field:Owner:$userTag[$ownerID]:yes}{field:Category Channels:$channelCount[$guildID;Category]:yes}{field:Text Channels:$djsEval[message.guild.channels.cache.filter(channel => channel.type == "GUILD_TEXT").size;yes]:yes}{field:Voice Channels:$channelCount[$guildID;Voice]:yes}{field:Members:$membersCount:yes}{field:Roles:$roleCount:yes}{thumbnail:$serverIcon[$guildID]}{footer:ID $guildID | Server Created •  $creationDate[$guildID]}}]
    $cooldown[10s;{ "content" : "<@$interactionData[author.id]>, a little too quick there.", "ephemeral" : true, "options": {"interaction": true} }]`
    })
