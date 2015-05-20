var express = require("express"),
    path = require("path");

var app = express(),
    views = path.join(__dirname, "views");

app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});

app.listen(3000, function () {
  console.log("STARTING");
});
