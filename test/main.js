var fs = require('fs'),
	path = __dirname + '/',
	output_path = path + '/output/',
	html_file = 'emkt_b2c_teaser.html'; // Change the name of your HTML file

// Put your variables and values here !!
var links_to_replace = {
	'link_crie_vp_topo'     : 'link1',
	'link_logo_topo'        : 'link2',
	'link_ebit_topo'        : 'link3',
	'link_banner_b2b_topo'  : 'link4',
	'link_corpo'            : 'link5',
	'link_comprar_presente' : 'link6',
	'link_facebook'         : 'link7',
	'link_twitter'          : 'link8',
	'link_instagram'        : 'link9',
	'link_linkedin'         : 'link10',
	'link_logo_vp_rodape'   : 'link11'
}

fs.readFile(path + html_file, {encoding: 'utf-8'}, function (err, data) {
	if (err) { throw err; }

	// Loop over array, replacing key by value
	for(var i in links_to_replace) {
		// string to find
		var str_find = '#{' + i + '}';
		// string to replace
		var str_replace = links_to_replace[i];
		// number of occurrences of the 'str_find' on the HTML file
		var count = data.split(str_find).length -1;

		// console.log('Found: ' + count + ' of the string: ' + str_find);

		for (var j = 0, k = count; j < k; j++) {
			// console.log('Replace: ' + str_find + ' by: ' + str_replace);
			data = data.replace(str_find, str_replace);
		}
	}

	// Updates the HTML file
	fs.writeFile(output_path + html_file, data, {encoding: 'utf-8'}, function (err) {
		if (err) return console.log(err);
		console.log('\n File Parsed with Success!! \n \n Saved at: ' + html_file );
	});
});