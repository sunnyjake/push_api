var express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/bower_components"));

app.use("/", function(request, response) {
    response.sendFile(__dirname.concat("/index.html"));
})
.listen(8080);

console.log("Server starts");
