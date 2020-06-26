const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const db = require("./models/Book");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect("mongodb://localhost/adequate-books", {
  useNewUrlParser: true,
	useUnifiedTopology: true
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/test", (req, res) => {
  db.Book.create({
    title: "title",
    authors: ["authors", "2nd author"],
    description: "stuff",
    image: "stuff.jpg",
    link: "google.com"
  }).then(() => res.send("response"))
} )

//return all books saved as json
app.get("/api/books", (req, res) => {
  db.Book.findAll
  //do I want to do a sort here?
})

//save new book to dB
app.post("/api/books", (req, res) => {
  db.Book.create({
    db.Book.create({

    })
  })
})

//delete a book
app.post("/api/books: id", (req, res) => {
  db.Book.remove

})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
