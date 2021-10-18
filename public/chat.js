let socket = io.connect("http://localhost:3000");

var message = document.getElementById("message");
var button = document.getElementById("send");
var username = document.getElementById("username");
var output = document.getElementById("output");

button.addEventListener("click", function () {
	sendMessage();
});

message.addEventListener("keyup", function (event) {
	event.key == "Enter" ? sendMessage() : null;
});

function sendMessage() {
	socket.emit("sendingMessage", {
		message: message.value,
		username: username.value,
	});
	message.innerText = "";
}
socket.on("broadcastMessage", function (data) {
	output.innerHTML +=
		"<p><strong>" + data.username + ": </strong>" + data.message + "</p>";
});
