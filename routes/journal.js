var data = require('../data.json');

exports.view = function(req, res){
  res.render('journal', {'name': 'journal'});
};
