/**
 * Module dependencies.
 */
var express = require('express');
var Book = require('../models/Book');


// expose

var router = module.exports = express.Router();

// GET /searches

router.get('/', function(req, res, next){
  res.render('search');
});

// POST /searches

router.post('/', function(req, res, next){

 	// req.assert('bookname', 'Name cannot be blank').notEmpty();
  // 	req.assert('booktitle', 'Title cannot be blank').notEmpty();
  // 	req.assert('isbn', 'ISBN cannot be blank').notEmpty();

  // 	var errors = req.validationErrors();

  // 	if (errors) {
  //   	req.flash('errors', errors);
  //   	return res.redirect('/searches');
  // 	}

  var query = {};

  for (var k in req.body){
  	if ('_csrf' === k) continue;
  	var v = req.body[k];
    if (v) query[k] = RegExp(v, 'i');
  }
  console.log(query);
  Book.find(query, function(err, docs){
    if (err) return next(err);
    res.render('search', { searches: docs });
  });

});
