  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
let config = require('../config.json');
module.exports = {
    name: 'help',
    description: 'help Command',
    execute(message, args){
        const Fivem = new Discord.MessageEmbed()
        .setTitle('FiveM')
        .setColor('#ffaa17')
        .addField(`${config.PREFIX}status`, 'Voir les stats du serveur')
        .addField(`${config.PREFIX}playerlist`, 'Voir qui est connecté au serveur')
        .addField(`${config.PREFIX}suggestion`, 'Faire une suggestion au serveur')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .setColor('#9500f2')
        .addField(`${config.PREFIX}ping`, 'Pong')
        .addField(`${config.PREFIX}clear <1-99>`, 'Effacer le chat')
        .setTimestamp()

        const pages = [
                Fivem,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }, 
};