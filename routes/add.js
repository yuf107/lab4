var versionIsA = require('../version.json').versionIsA;

if (versionIsA){
        var data = require('../dataA.json');
}
else{
        var data = require('../dataB.json');
}

exports.view = function(req, res){
	url = req.originalUrl;

	var name = url.substring(5,);
	name = name.replace(/%20/g, " ");
	name = name.replace(/%27/g, "'");

	var rows = data.events;
	var current_event = {};
	var edit = false;

	for (var i = 0; i < rows.length; i++) {
		var events = rows[i].row;

		for (var j = 0; j < events.length; j++){
			if (name.valueOf() == events[j].name.valueOf()){
				current_event = events[j];
				edit = true;
			}
		}
	}

	if (edit){
		current_event["edit"] = "Edit Event";
		current_event["action"] = "/editEvent";
		current_event["readonly"] = "readonly";
		current_event["delete"]="/Delete";
	}
	else{
		current_event["edit"] = "Add Event";
		current_event["action"] = "/addEvent";
	}

	res.render('add', current_event);
	console.log(current_event);
}


