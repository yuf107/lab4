var versionIsA = require('../version.json').versionIsA;

if (versionIsA){
        var data = require('../dataA.json');
}
else{
        var data = require('../dataB.json');
}

exports.editEvent = function(req, res) {
	var name = req.query.name;
	if (name.replace(/ /g, "") == ""){
                console.log("Cannot create event without name");
                return res.redirect('/index');
        }

	var color = "";
        var rand = Math.random();

        if(req.query.happy){
                color = "#f65314";
        }
        else if(rand > 0.5){
                color = "blue";
        }
        else{
                color = "#00a1f1";
        }

	var newEvent = {"name": req.query.name,
                "comment": req.query.comment,
                "date": req.query.date,
                "timeFrom": req.query.timeFrom,
                "timeTo": req.query.timeTo,
                "place": req.query.place,
                "importance": req.query.importance,
		"color": color
	};

	var name = req.query.original;
	var rows = data.events;

        for (var i = 0; i < rows.length; i++) {
                var events = rows[i].row;

                for (var j = 0; j < events.length; j++){
                        if (name.valueOf() == events[j].name.valueOf()){
				events[j] = newEvent;                        	
			}
                }
	}

	return res.redirect('/index');
}
