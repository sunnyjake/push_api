var express = require("express");

var app = express();

app.use(express.static(__dirname + "/"));//if want sw.js to be seen by script

app.get("/", function(request, response) {
    response.sendFile(__dirname.concat("/index.html"));
})
.listen(8080);

console.log("Server starts");
