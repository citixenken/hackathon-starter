var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	title: String,
  isbn: Number,
  author: String,
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;