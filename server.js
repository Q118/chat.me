/** @format */

const io = require("socket.io")(3000);

//gives each user that logs on their own socket
io.on("connection", (socket) => {
	socket.on("send-chat-message", (message) => {
		//this will send the message to every other user connected to the server
		//except for user that sent the message
		socket.broadcast.emit("chat-message", message);
	});
});
