var version = require('../version.json');

exports.toIndex = function(req, res){
	version.versionIsA.push(true);
	return res.redirect('/index');
}
