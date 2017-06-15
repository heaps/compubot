var express  	= require('express');
var app      	= express();

// used to serve static files from public directory
app.use(express.static('start/Event'));
app.use(express.static('start'));


/* Serve page based on request domain */
app.get('/', function(req, res){

	var host = req.get('host');
	console.log(host);

	if (host === 'patroneshermosos.com'){
		res.redirect('/es.html');
	}
	else if	(host === 'www.patroneshermosos.com'){
		res.redirect('/es.html');
	}	
	else if	(host === 'conpatron.com'){
		res.redirect('/es.html');
	}
	else if	(host === 'www.conpatron.com'){
		res.redirect('/es.html');
	}	
	else {
		res.redirect('/en.html');
	}
});


// start server
app.listen(80, function(){
	console.log('Listening on port 80');
});
