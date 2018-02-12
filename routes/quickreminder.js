var fs = require('fs');

exports.view = function(req, res){
	res.render('reminder',{
		'remind':'event'
	})

}

function writeToTxt(){
	console.log('1');
}