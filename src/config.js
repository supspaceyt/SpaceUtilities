module.exports = {
  Bot: {
token: process.env.TOKEN, //Discord Bot Token
prefix: ["$getServerVar[prefix]","<@!$clientID>","<@$clientID>",">"],  
intents: "all",
fetchInvites: true,
autoUpdate: true,
respondOnEdit: {
commands: true
},
}
}
