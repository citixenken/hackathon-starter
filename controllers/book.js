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
    booktitle: req.body.booktitle,
    authorname: req.body.authorname,
    isbn: req.body.isbn
  });

  Book.findOne({ booktitle: req.body.booktitle }, function(err, existingBook) {
    if (existingBook) {
      req.flash('errors', { msg: 'This Book already exists in our database.' });
      return res.redirect('/books');
    }
    book.save(function(err) {
      if (err) {
        return next(err);
      }
      req.flash('success', { msg: 'Book has been added to our database.' });
      res.redirect('/books');
    });
  });
};

