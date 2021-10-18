const express = require("express");
const socket = require("socket.io");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
	response.send({ status: true, result: "success" });
});

const server = app.listen(3000, () => {
	console.log("signalling server listening on 3000");
});

const sigServer = socket(server);

sigServer.on("connection", (soc) => {
	soc.on("sendingMessage", function (data) {
		sigServer.emit("broadcastMessage", data);
		console.log(data);
	});
	console.log(soc.id);
});
