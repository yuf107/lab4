var data = require('../data.json');

exports.deleteEvent = function(req, res){
	var name = req.query.name;
	var rows = data.events;

	var I = 0;
	var J = 0;
        for (var i = 0; i < rows.length; i++) {
                var events = rows[i].row;

                for (var j = 0; j < events.length; j++){
                        if (name.valueOf() == events[j].name.valueOf()){
				I = i;
				J = j;
			}
                }
        }

	var newArray = []
	for (var j = 0; j < J; j++){
		newArray.push(data.events[I].row[j]);
	}
	for (var j = J + 1; j < data.events[I].row.length; j++){
		newArray.push(data.events[I].row[j]);
	}
	
	data.events[I].row = newArray;
	return res.redirect('/index');
}
