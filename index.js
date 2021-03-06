var express = require('express');
var app = express();

app.use('/css', express.static(__dirname + '/css'));
app.use('/src', express.static(__dirname + '/src'));
app.use('/build', express.static(__dirname + '/build'));

app.use('/', function(req, res) {
	res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000, function() {
	console.log('listening on *:3000');
}); 