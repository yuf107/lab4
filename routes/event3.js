var fs = require('fs');

exports.view = function(req, res){
	res.render('event3',{
		'third':'event'
	})

}

function writeToTxt(){
	console.log('1');
}