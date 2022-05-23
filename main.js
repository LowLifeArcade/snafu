// const express = require('express');
// const app = express();

// app.get('/time', (req, res) => {
// Importing the required modules
const WebSocketServer = require('ws');

// Creating a new websocket server
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
console.log('The WebSocket server is running on port 8080');
// });

// app.listen('4040', () => {
//     console.log('Express app listenind on 4040')
// })

function gameLogic(ws) {
    // setInterval(() => {
    //     let time = new Date();
    //     ws.send('The time:' + time.toTimeString());
    // }, 1000);
    ws.on('message', data => {
        // ws.send(`User input ${data}`);
        ws.send(`${data}`)
    });
}
