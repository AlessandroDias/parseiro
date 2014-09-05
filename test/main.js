var fs = require('fs'),
	html_file = __dirname + '/index.html';

// Put your variables and values here !!
var links_to_replace = {
	link_topo : 'http://www.novahaus.com.br',
	link_corpo : 'http://www.google.com.br&search:%s',
	link_rodape : 'http://www.amazon.com.br',
	link_facebook : 'http://www.facebook.com',
	link_twitter : 'http://www.twitter.com'
}

fs.readFile(html_file, {encoding: 'utf-8'}, function (err, data) {
	if (err) { throw err; }

	// Loop over array, replacing key by value
	for(var i in links_to_replace) {
		data = data.replace('#' + i + '#', links_to_replace[i]);
	}

	// Updates the html file
	fs.writeFile(html_file, data, {encoding: 'utf-8'}, function (err) {
		if (err) return console.log(err);
		console.log('\n File Parsed with Success!! \n \n Saved at: ' + html_file );
	});

});