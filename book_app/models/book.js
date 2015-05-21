var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
                    title: {
                      type: String,
                      default: ""
                    },
                    author: String,
                    description: String
                  });

// constructs the Book model with mongoose and the collection in Mongo
var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
