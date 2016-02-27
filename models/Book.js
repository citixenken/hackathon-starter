var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	name: String
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;