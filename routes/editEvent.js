var data = require('../data.json');

exports.editEvent = function(req, res) {
	var newEvent = {"name": req.query.name,
                "comment": req.query.comment,
                "date": req.query.date,
                "timeFrom": req.query.timeFrom,
                "timeTo": req.query.timeTo,
                "place": req.query.place,
                "importance": req.query.importance};

	var name = req.query.name;
	var rows = data.events;

        for (var i = 0; i < rows.length; i++) {
                var events = rows[i].row;

                for (var j = 0; j < events.length; j++){
                        if (name.valueOf() == events[j].name.valueOf()){
				events[j] = newEvent;                        	
			}
                }
	} // Rearrange events if possible 
}
