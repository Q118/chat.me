const io = require('socket.io')(3000);

//gives each user that logs on their own socket
io.on('connection', socket => {
    socket.emit('chat-message', 'Hello World')
})