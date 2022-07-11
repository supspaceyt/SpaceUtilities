module.exports = ({
    name: "membercount",
    $if: "v4",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{description:**Members** $membersCount}{color:0422f7}{timestamp}}]`
    })
