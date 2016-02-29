var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
	userId: { type: String },
	// booktitle: { type: String, lowercase: true, unique: true },
	// authorname: { type: String, lowercase: true, unique: true },
	booktitle: { type: String, lowercase: true },
	authorname: { type: String, lowercase: true },
	isbn: { type: String, unique: true },
});

var Book = mongoose.model('Book', bookSchema);
module.exports = Book;