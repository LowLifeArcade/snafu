const WebSocketServer = require('ws');
const express = require('express');
const app = express();
const server = require('http').createServer(app)
const wss = new WebSocketServer.Server({ port: 8080 });

// Creating connection using websocket
wss.on('connection', ws => {
    console.log('new client connected');
    // sending message
    ws.on('message', data => {
        console.log(`Client has sent us: ${data}`);
    });
    // handling what to do when clients disconnects from server
    ws.on('close', () => {
        console.log('the client has connected');
    });
    // Test message:
    gameLogic(ws);

    // handling client connection error
    ws.onerror = function () {
        console.log('Some Error occurred');
    };
});

function gameLogic(ws) {
    // for loop over connections and create array of connections
    
    ws.on('message', data => {
        // ws.send(`User input ${data}`);
        ws.send(`${data}`)
    });
}

app.get('/',(req, res) => {
    res.json('Ayyyy')
})

server.listen('8080', () => console.log('App listening on port 8080'))