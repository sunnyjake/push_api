var express = require("express");
app = express();
app.use("/", function(request, response) {
    console.log("Hey");
    console.log("new info");
    console.log("new data");
});
