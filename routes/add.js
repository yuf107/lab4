var data = require('../data.json');

exports.view = function(req, res){
	url = req.originalUrl;
	res.render('add', data)
	console.log(url);
}


