/** @format */

const io = require("socket.io")(3000);

const users = {}


//gives each user that logs on their own socket
io.on("connection", (socket) => {
	socket.on("send-chat-message", (message) => {
        socket.on('new-user', name => {
            users[socket.id] = name
            socket.broadcast.emit('user-connected', name)
        })

		//this will send the message to every other user connected to the server
        socket.broadcast.emit("chat-message", message);
        //except for user that sent the message
	});
});
