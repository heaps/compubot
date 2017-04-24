var express  	= require('express');
var app      	= express();

// used to serve static files from public directory
app.use(express.static('start/Event'));
app.use(express.static('start'));

// start server
app.listen(8080, function(){
	console.log('Listening on port 80');
});
