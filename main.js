var fs = require('fs'),
	cheerio = require('cheerio');

var html_file = __dirname + '/index.html',
	links_to_replace = require('./links.json'),
	links_to_replace;

var link_topo = "http://www.novahaus.com.br",
	link_corpo = "http://www.google.com.br",
	link_rodape = "http://www.amazon.com.br",
	link_facebook = "http://www.facebook.com",
	link_twitter = "http://www.twitter.com";

fs.readFile(html_file, {encoding: 'utf-8'}, function (err, data) {
	if (err) { throw err; }

	console.log(data);

	data = data.replace('$link_topo', link_topo);
	data = data.replace('$link_corpo', link_corpo);
	data = data.replace('$link_rodape', link_rodape);
	data = data.replace('$link_facebook', link_facebook);
	data = data.replace('$link_twitter', link_twitter);

	fs.writeFile('index.html', data, {encoding: 'utf-8'}, function (err) {
		if (err) return console.log(err);
	});

});

	/*
	links_count = Object.keys(links_to_replace).length;

	var html_content = cheerio.load(data);

	for (var i=0; i < links_count; i++) {
		var key = links_to_replace;
		console.log(links_to_replace);
	}

	fs.writeFile(html_file, html_content.html());
	*/