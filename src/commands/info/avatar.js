module.exports = ({
    name: "avatar",
    $if: "v4",
    type: "interaction", 
    prototype : 'slash',
    code: `$interactionReply[;{newEmbed:{title:Avatar}{author:$userTag[$findUser[$message]]:$userAvatar[$findUser[$message]]}{image:$userAvatar[$findUser[$message]]}}]`
})
