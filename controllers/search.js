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

  var query = {};

  for (var k in req.query){
    query[k] = RegExp(req.query[k], 'i');
  }

  Book.find(query, function(err, docs){
    if (err) return next(err);
    res.render('search', { searches: docs });
  });

});
