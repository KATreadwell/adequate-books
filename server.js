require("dotenv").config();
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const db = require("./models/Book");
const axios = require("axios");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/adequate-books", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//return books searched by google api
app.post("/api/search", (req, res) => {
  const { searchTerm } = req.body;
  const key = process.env.key;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=newest&key=${key}`;

  axios.get(url)
    .then(books => {
      console.log(books.data);
      res.send(books.data)
    })
})

//view how do i write this path?  to view the book on google api?

app.get("/test", (req, res) => {
  db.Book.create({
    title: "title",
    authors: ["authors", "2nd author"],
    description: "stuff",
    image: "stuff.jpg",
    link: "google.com"
  }).then(() => res.send("response"))
})

//return all books saved as json
app.get("/api/books", (req, res) => {
  db.Book.findAll({ saved: true })
    .then(function (dbBooks) {
      console.log(dbBooks)
      res.render("books", {
        Books: dbBooks,
      })
    }) 
})

//save new book to dB
app.post("/api/books", (req, res) => {
  db.Book.create({
      title: "",
      authors: [],
      description: "",
      image: "",
      link: ""
  }).then(() => res.send("response"))
})

//delete a book, do I simply want to change state to unsaved?
// app.post("/api/books: id", (req, res) => {
//   db.Book.remove

// })

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
