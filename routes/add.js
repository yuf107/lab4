var data = require('../data.json');

exports.view = function(req, res){
	url = req.originalUrl;
//	var name = url;

	var name = url.substring(5,);
	name = name.replace(/%20/g, " ");

	var array = data.events;
	var current_event = {};

	for (var i = 0; i < array.length; i++) {
		console.log(name);
		console.log(array[i].name);
		if (name.valueOf() == array[i].name.valueOf()){
			console.log("1");
			current_event = array[i];
		}
	}

	res.render('add', current_event);
	console.log(current_event);
}


