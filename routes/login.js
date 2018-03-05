var versionIsA = require('../version.json').versionIsA;
var indexOrAdd = "";

if (versionIsA){
	indexOrAdd = "index";
}
else{
	indexOrAdd = "add";
}

exports.view = function(req, res){
	res.render('login',{"indexOrAdd": indexOrAdd})
}
