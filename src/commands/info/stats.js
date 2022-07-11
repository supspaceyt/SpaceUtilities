module.exports = ({
    name: "stats",
    $if: "v4",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{author:$username[$clientID]:$userAvatar[$clientID]}{field:Guilds:$serverCount:yes}{field:Users:$membersCount:yes}{field:Load Avg:$djsEval[const os = require("os")
     os.loadavg().map(n => n.toFixed(3)).join(', ');yes]:yes}{field:Free Mem:$ram:yes}{field:Uptime:$uptime:yes}{footer:PID $djsEval[process.pid;yes] | Hyperion | Cluster 1 | Shard $djsEval[message.channel.guild.shard.id;yes]:}{timestamp}}]
    $cooldown[5s;{ "content" : "<@$interactionData[author.id]>, a little too quick there.", "ephemeral" : true, "options": {"interaction": true} }]`
    })
