
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var net = require('net');
//var hello = require('./routes/hello');
var add = require('./routes/add');
var index = require('./routes/index');
var quickreminder = require('./routes/quickreminder')
var event3 = require('./routes/event3')
var event2 = require('./routes/event3')
var event1 = require('./routes/event3')
var login = require('./routes/login');

var app = express();
var fs = require('fs');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);

app.get('/login', login.view);
app.get('/add', add.view);
app.get('/index', index.view);
app.get('/quickreminder', quickreminder.view)
app.get('/event3', event3.view)
app.get('/event2', event3.view)
app.get('/event1', event3.view)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

function writeToTxt(){
	var txt = app.getElementByIdSync("event").value();
	console.log(txt);
	console.log('1');
};
