exports.view = function(req, res){
  res.render('index', {
        'name': 'World!',
  });
};

