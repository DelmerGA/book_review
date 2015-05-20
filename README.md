# Review
## Book App

| Objectives |
| :---- |
| REVIEW ALL THE THINGS! |

## Setting Up

Let's setup a typical project directory

```bash
mkdir book_app
cd book_app
mkdir views
mkdir public
mkdir public/stylesheets
mkdir public/javascripts
touch index.js
touch views/home.html
mkdir models
touch models/index.js
echo {} > package.json
```

Let's also get started with a usual `index.js` file.

First install the usual module.

```bash
npm install --save express body-parser
```

`index.js`

```javascript
var express = require("express"),
    bodyParser = require("body-parser"),
    path = require("path");

var app = express(),
    views = path.join(__dirname, "views");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  var homePath = path.join(views, "home.html");
  res.sendFile(homePath);
});

app.listen(3000, function () {
  console.log("STARTING");
});
```

Let's also create basic `views/home.html`.


```html
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <h1>Book App</h1>
  </body>
</html>
```

## A Book Model

Next we should add a `Book` model. Then we can start building out CRUD for our application.

Let's install `mongoose`.

```bash
npm install --save mongoose
```

`models/book.js`


```javascript

var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
                    title: String,
                    author: String,
                    description: String
                  });


var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
```

Then we need to update our `models/index.js` to reflect the new model we added.

`models/index.js`

```javascript
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/book_app");

module.exports.Book = require("./book");
```

This allows us to be able to both connect to our `book_app` database. Then it includes `Book` as part of the `db` module, used later.

## 

