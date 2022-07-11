module.exports = [{
    name: "callverify",
    $if: "v4",
    code: `$description[1;To get access to channels you need to proof that your a human press the button to get verified if verification fails dm a staff member to get verified]
    $title[1;Welcome to the server!]
    $description[2;Read <#886819741371609138> to make sure you don't get kicked, warned, banned, or muted]
    $title[2;Information]
    $color[1;#0422f7]
    $color[2;#0422f7]
    $addButton[1;Rules;link;https://discord.com/channels/876519923055198208/886819741371609138/940040632595009546;no;]
    $addButton[1;Verify;success;verify;no;]
    `
    },{
    type: 'interaction', 
    prototype: "button",
    name: "verify",
    $if: "v4",
    code: `$channelSendMessage[933118308843135076;{newEmbed:{description:**$username** has been verified.}{color:#0422f7}{footer:$userTag[$authorID] | $authorID:}}]
    $interactionReply[✅ You are now verified in this server.;;;;;yes]
    $giveRole[$guildID;$interactionData[author.id];887545362095697981]
    $onlyIf[$hasRoles[$guildID;$interactionData[author.id];887545362095697981]==false;{
    "content" : "❌ You are already verified in this server.",
    "ephemeral" : true,
    "options": {"interaction": true}
    }]  
    `
    }]
