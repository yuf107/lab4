var data = require('../data.json');

exports.addEvent = function(req, res) {
        newEvent = {"name": req.query.name,
		"comment": req.query.comment,
		"date": req.query.date,
		"timeFrom": req.query.timeFrom,
		"timeTo": req.query.timeTo,
		"place": req.query.place,
		"importance": req.query.importance};

		console.log("adding event!");
	if (!newEvent["importance"]){
		newEvent["importance"] = 32;
	}
	//name
	//rows
        var name = req.query.name;
        var rows = data.events;

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
}

