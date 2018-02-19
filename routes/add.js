var data = require('../data.json');

exports.view = function(req, res){
	url = req.originalUrl;
//	var name = url;

	var name = url.substring(5,);
	name = name.replace(/%20/g, " ");
	name = name.replace(/%27/g, "'");

	var rows = data.events;
	var current_event = {};

	for (var i = 0; i < rows.length; i++) {
		var events = rows[i];

		for (var j = 0; j < events.length; j++){
			if (name.valueOf() == events[j].name.valueOf()){
				current_event = events[i];
			}
		}
	}

	res.render('add', current_event);
	console.log(current_event);
}


