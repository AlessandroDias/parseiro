var fs = require('fs');

var html_file = __dirname + '/index.html';

// ToDo: read links from a json file
// var links_to_replace = require('./links.json');

var link_topo = "http://www.novahaus.com.br",
	link_corpo = "http://www.google.com.br&search=%s",
	link_rodape = "http://www.amazon.com.br",
	link_facebook = "http://www.facebook.com",
	link_twitter = "http://www.twitter.com";

fs.readFile(html_file, {encoding: 'utf-8'}, function (err, data) {
	if (err) { throw err; }

	data = data.replace('#link_topo#', link_topo);
	data = data.replace('#link_corpo#', link_corpo);
	data = data.replace('#link_rodape#', link_rodape);
	data = data.replace('#link_facebook#', link_facebook);
	data = data.replace('#link_twitter#', link_twitter);

	// ToDo: Loop over it, replacing variables with the values of the json file
	// for () {
		// ...
	//}

	fs.writeFile(html_file, data, {encoding: 'utf-8'}, function (err) {
		if (err) return console.log(err);
		console.log('\n File Parsed with Success!! \n \n Saved at: ' + html_file );
	});

});