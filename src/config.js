module.exports = {

 
    Bot: {

        token: process.env.TOKEN, //Discord Bot Token

        prefix: ">",

        intents: "all",


        autoUpdate: true,

        respondOnEdit: {
            commands: true
            },
    }
}
