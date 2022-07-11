module.exports = ({
    name: "uptime",
    $if: "v4",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{color:#0422f7}{title:Uptime}{description:$uptime}{footer:PID $djsEval[process.pid;yes] | Hyperion | Cluster 1 | Shard $djsEval[message.channel.guild.shard.id;yes] | $djsEval[const moment = require('moment');
    require('moment-duration-format');
    let uptime = moment.duration(process.uptime(), 'seconds'),
    started = moment().subtract(process.uptime(), 'seconds').format('llll');
    started;yes]}}]
    $cooldown[3s;{ "content" : "<@$interactionData[author.id]>, a little too quick there.", "ephemeral" : true, "options": {"interaction": true} }]`
    })
