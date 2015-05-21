
// when you give jQuery a function
// it waits for the document to 
// be ready
$(function () {
  console.log("LOADED!")

  $.get("/books").
  done(function (data) {
    console.log(data);
  });
});