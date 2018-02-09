var fs = require('fs');

exports.view = function(req, res){
	res.render('quickreminder',{
		'remind':'event'
	})

}

function writeToTxt(){
	console.log('1');
}