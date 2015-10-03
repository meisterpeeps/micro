var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
	res.sendfile("index.html");
});

var server = http.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Server listening on: ' + host + ' port: ' + port);
});