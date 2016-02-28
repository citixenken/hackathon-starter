/**
 * GET /searches
 * List all books.
 */

 var Search = require('../models/Search.js');

 exports.getSearches = function(req, res){
 	Search.find(function(err, docs){
 		res.render('searches', { searches: docs });
 	});
 };

 exports.postSearches = function(req, res){
 	req.assert('bookname', 'Name cannot be blank').notEmpty();
  	req.assert('booktitle', 'Title cannot be blank').notEmpty();
  	req.assert('isbn', 'ISBN cannot be blank').notEmpty();

  	var errors = req.validationErrors();

  	if (errors) {
    	req.flash('errors', errors);
    	return res.redirect('/searches');
  	}
 };