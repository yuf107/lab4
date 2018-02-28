var data = require('../data.json');

exports.addEvent = function(req, res) {
        newEvent = {"name": req.query.name,
		"comment": req.query.comment,
		"date": req.query.date,
		"timeFrom": req.query.timeFrom,
		"timeTo": req.query.timeTo,
		"place": req.query.place,
		"importance": req.query.importance};

	if (!newEvent["importance"]){
		newEvent["importance"] = 32;
	}

        var name = req.query.name;
        var rows = data.events;

	if (name.replace(/ /g, "") == ""){
		console.log("Cannot create event without name");
		return;  // Think about the return for empty event name
	}

	for (var i = 0; i < rows.length; i++) {
                var events = rows[i].row;
                
                for (var j = 0; j < events.length; j++){
                        if (name.valueOf() == events[j].name.valueOf()){
                        	console.log("Event already exist.")
				return;
			}       
                }       
        }

	for (var j = 0; j < 3; j++){
		var length = 0;
		for (var i = 0; i < data.events[j].row.length; i++){
			length += parseInt(data.events[j].row[i].importance);
		}
	
		if (length + parseInt(newEvent["importance"]) < 100){
			data.events[j].row.push(newEvent);
			break;
		}
	}

	return res.redirect('/index');
}

