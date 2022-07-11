module.exports = ({
    name: "info",
    $if: "v4",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{color:#0422f7}{author:$username[$clientID]:$userAvatar[$clientID]}{authorURL:https://github.com/supspaceyt/SpaceUtilities}{field:Version:$packageVersion:yes}{field:Library:Aoi.js:yes}{field:Creator:<@849695984086286347>:yes}{field:Servers:$serverCount:yes}{field:Users:1:yes}{field:Bot Code:[GitHub](https://github.com/supspaceyt/SpaceUtilities):yes}{field:Ping:\`$pingms\`:yes}{field:Time:<t:$truncate[$divide[$dateStamp;1000]]:t>:yes}{footer:Hyperion | Cluster 1 | Shard $djsEval[message.channel.guild.shard.id;yes] | Uptime $uptime:}}]
    $cooldown[60s;{ "content" : "<@$interactionData[author.id]>, a little too quick there.", "ephemeral" : true, "options": {"interaction": true} }]`
    })
