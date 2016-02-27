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