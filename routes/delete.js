var data = require('../data.json');

exports.deleteEvent = function(req, res){
	var name = req.query.name;
	var rows = data.events;

        for (var i = 0; i < rows.length; i++) {
                var events = rows[i].row;

                for (var j = 0; j < events.length; j++){
                        if (name.valueOf() == events[j].name.valueOf()){
                        	delete events[j];
				console.log(events);
			}
                }
        }

}
