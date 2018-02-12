var fs = require('fs');

exports.view = function(req, res){
	res.render('add',{
		'name':'event'
	})

}


