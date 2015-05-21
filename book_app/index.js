var express = require("express"), // for our app
    bodyParser = require("body-parser"), // including bodyParser
    path = require("path"); // is for manipulating paths to files

var db = require("./models");

var app = express(), // defining our application using 
                     // the express constructor 
    views = path.join(__dirname, "views");
    // ./views
    
// tell our application what our
//  assets are
app.use(express.static("bower_components"));
app.use(express.static("public"));


// to read body params submitted in forms
app.use(bodyParser.urlencoded({extended: true}));

// when go to the root route
app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});
  
// curl localhost:3000/books
app.get("/books", function (req, res) {
  db.Book.
    find({},
      function (err, books) {
        res.send(books);
      });
});




app.listen(3000, function () {
  console.log("STARTING");
});






