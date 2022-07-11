const Aoijs = require("aoi.js");

const os = require("os");

const { Client, Collection, MessageEmbed } = require("discord.js");

const fs = require("fs");

const path = require("path");

require("dotenv").config({
	path: path.resolve(__dirname, '../.env'),
});

const config = require('./config');

const bot = new Aoijs.Bot(config.Bot);

bot.status(...require('./handler/status'));

require('./events/callbacks')(bot);


require('./events/ready')(bot);

const loader = new Aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./src/commands/')

require('./colors')(loader)

const files = fs.readdirSync('./src/prev').filter(file => file.endsWith('.js'))
files.forEach(x => {
require(`./prev/${x}`)(bot)
});
