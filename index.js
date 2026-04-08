const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: { origin: "*" } });

io.on('connection', (socket) => {
  socket.on('chat', (msg) => { io.emit('chat', msg); });
});

module.exports = httpServer;

if (require.main === module) {
  httpServer.listen(3000, () => console.log('Local server: 
                  http://localhost:3000'));
                  
}
