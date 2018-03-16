var versionIsA = require('../version.json').versionIsA;

if (versionIsA == true){
	var data = require('../dataA.json');
}
else{
	var data = require('../dataB.json');
}

exports.view = function(req, res){
  res.render('index', data);
};

