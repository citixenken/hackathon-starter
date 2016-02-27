var mongoose = require('mongoose');
var searchSchema = new mongoose.Schema({
	name: String
});

var Search = mongoose.model('Search', searchSchema);
module.exports = Search;