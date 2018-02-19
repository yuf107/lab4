var data = require('../data.json');

exports.addEvent = function(req, res) {
        var newEvent = {"name": req.query.name,
		"comment": req.query.comment,
		"date": req.query.date,
		"timeFrom": req.query.timeFrom,
		"timeTo": req.query.timeTo,
		"place": req.query.place,
		"importance": req.query.importance};

	for (var j = 0; j < 3; j++){
		var length = 0;
		for (var i = 0; i < data.events[j].row.length; i++){
			length += parseInt(data.events[j].row[i].importance);
		}
	
		if (length + parseInt(req.query.importance) < 100){
			data.events[j].row.push(newEvent);
			break;
		}
	}
}

