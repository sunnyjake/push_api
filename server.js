var express = require("express");
app = express();
app.use("/", function(request, response) {
    console.log("Hey");

});