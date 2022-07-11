module.exports = ({
    name: "ping",
    $if: "v4",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[Pong! \`$pingms\`]
    $cooldown[3s;{ "content" : "<@$interactionData[author.id]>, a little too quick there.", "ephemeral" : true, "options": {"interaction": true} }]`
    })
