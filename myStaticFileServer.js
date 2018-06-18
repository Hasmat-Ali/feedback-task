var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
console.log("Server is running on port number 3000");
app.listen(3000);