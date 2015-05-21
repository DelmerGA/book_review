// models/index.js

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book_app");


module.exports // => {}

// when you require this file it will return
// module.exports whatever that is
// 
//  { Book: mongoose.model("Book", ...) }

// which will be used for require
//
//  db = require("./models")
//
// db = { Book: mongoose.model("Book", ...) }

module.exports.Book = require("./book");