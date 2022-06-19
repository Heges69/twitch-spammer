const tmi = require('tmi.js');
const fs = require('fs');

const tokens = fs.readFileSync('./tokens.txt', 'utf-8').replace('\r', '').split('\n');

let clients = [];

tokens.forEach(t => {
    const client = new tmi.Client({
        options: { debug: false },
        identity: {
            password: `oauth:${t}`,
            username: 'sdasdasda'
        },
        channels: ['#heges69']
    })
    client.connect().catch(console.error)
    clients.push(client);

    client.on('connected', () => {
        console.log('connected')
        setInterval(() => {
            client.say('#heges69', `${Math.floor(Math.random() * 99999999)}`)
            console.log('sent')
        }, 1000)
    })
})


process.on('uncaughtException', console.log);
process.on('unhandledRejection', console.log);