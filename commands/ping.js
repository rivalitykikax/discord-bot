module.exports = {
    name: 'ping',
    description: 'Ping Commande',
    execute(message, args){
        message.channel.send('Pong');
    }, 
};