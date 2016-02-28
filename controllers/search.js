/**
 * Module dependencies.
 */
var router = express.Router();
var Book = require('../models/Book');

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

  for (var k in req.query){
    query[k] = RegExp(req.query[k], 'i');
  }

  Book.find(query, function(err, docs){
    if (err) return next(err);
    res.render('search', { searches: docs });
  });

});
