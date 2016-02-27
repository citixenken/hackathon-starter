/**
 * GET /books
 * Add book.
 */

 var Book = require('../models/Book.js');

 exports.getBooks = function(req, res){
 	Book.find(function(err, docs){
 		res.render('books', { books: docs });
 	});
 };