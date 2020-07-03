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

const mongoUrl = process.env.MONGODB_URI || "mongodb://localhost/adequate-books";

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//return books searched by google api
app.post("/api/search", (req, res) => {
  console.log(req.body);
  const { searchTerm } = req.body;
  const key = process.env.key;
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=newest&key=${key}`;

  axios.get(url)
    .then(books => {
      console.log('This line also ran.');
      console.log(books)
      console.log(books.data.items);
      res.send(books.data.items)
    })
})


//return all books saved as json
app.get("/api/books", (req, res) => {
  db.Book.find({})
    .then(function (dbBooks) {
      console.log(dbBooks)
      res.json( dbBooks )
    }) 
})

//save new book to dB
app.post("/api/books", (req, res) => {
  db.Book.create({
      title: req.body.title,
      authors: req.body.authors,
      description: req.body.description,
      image: req.body.image,
      link: req.body.link,
      _id: req.body.id
  }).then(() => res.send("response"))
})

//delete a book
app.post("/api/books: id", (req, res) => {
  db.Book.remove({
    _id: req.body.id
  }).res.json(book)
})

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
