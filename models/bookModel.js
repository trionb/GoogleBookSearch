const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
    // url string for authors image
  authors: {
    type: String,
    required: true
  },
    // url string for description image
  description: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },
  // url for book web page - unique index
  href: {
    type: String,
    default: "",
    unique: true
  },

});

const Book = mongoose.model("book", bookSchema);

module.exports = Book;
