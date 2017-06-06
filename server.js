var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);
console.log('blog server listening on port 8080');
