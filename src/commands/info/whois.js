module.exports = ({
    name: "whois",
    type: "interaction", 
    prototype : 'slash',
    $if: "v4",
    code: `$interactionReply[;{newEmbed:{author:$userTag[$findUser[$message]]:$userAvatar[$findUser[$message]]}{thumbnail:$userAvatar[$findUser[$message;yes]]}{description:<@$findUser[$message]>}{color:$getRoleColor[$highestRole[$findUser[$message]]]}{field:Joined:$formatDate[$memberJoinedDate[$findUser[$message]];LLLL]:yes}{field:Registered:$creationDate[$findUser[$message]]:yes}{field:Roles:$splitText[1]:no}{field:Key Permissions
    :$userPerms[$findUser[$message]]:no}{footer:ID $findUser[$message;yes]}{timestamp:}}]
    $textSplit[$userRoles[$findUser[$message;yes];$guildID;mention];, @everyone]
    $cooldown[3s;{ "content" : "<@$interactionData[author.id]>, a little too quick there.", "ephemeral" : true, "options": {"interaction": true} }]
    `
    })
