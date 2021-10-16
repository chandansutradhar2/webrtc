const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
	response.send({ status: true, result: "success" });
});

app.listen(3000, () => {
	console.log("signalling server listening on 3000");
});
