var data = require('../data.json');

exports.addEvent = function(req, res) {
        var newEvent = {"name": req.query.name};
        console.log(data);
        data.events.push(newEvent);
}

