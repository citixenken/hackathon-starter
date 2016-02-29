/**
 * GET /books
 * Add book.
 */

 var Book = require('../models/Book.js');

 exports.getBooks = function(req, res){
 	Book.find({userId: req.user.id}, function(err, docs){
 		res.render('books', { books: docs });
 	});
 };

 /**
 * POST /books
 * Send a books form.
 */
exports.postBooks = function(req, res) {
  req.assert('booktitle', 'Title cannot be blank').notEmpty();
  req.assert('authorname', 'Name cannot be blank').notEmpty();
  req.assert('isbn', 'ISBN cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/books');
  }

  var book = new Book({
    userId: req.user.id,
    booktitle: req.body.booktitle,
    authorname: req.body.authorname,
    isbn: req.body.isbn
  });

  book.save(function(err) {
    if (err) {
      req.flash('errors', { msg: (err.errors.booktitle || err.errors.authorname || err.errors.isbn || err).message });
      //req.flash('errors', { msg: 'A Book with this credentials already exists'});
    } 
    else {
      req.flash('success', { msg: 'Book has been added to our database.'});
    }
    res.redirect('/books');
  });

};

