const { keep_alive } = require("./keep_alive");
const Aoijs = require("aoi.js");
const { Client, Collection, MessageEmbed } = require("discord.js");
const fs = require("fs");
const path = require("path");
const config = require('./config.js');
const bot = new Aoijs.Bot(config.Bot);