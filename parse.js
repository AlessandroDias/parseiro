var fs = require('fs'),
	path = __dirname + '/',
	output_path = path + '/output/';

var json_file = fs.readFileSync('config.json', 'utf8');		// reads json config file
var config_file = JSON.parse(json_file);					// json file parsed
var html_file_name = config_file["file_name"];				// Name of the HTML file

fs.readFile(path + html_file_name, "utf-8", function (err, data) {
	if (err) { throw err; }

	for (var i = 0, j = config_file.links.length; i < j; i++) {
		for (key in config_file.links[i]) {
			var str_find = '#{' + key + '}';
			var str_replace = config_file.links[i][key];
			var count = data.split(str_find).length -1;

			for (var k = 0, l = count; k < l; k++) {
				data = data.replace(str_find, str_replace);
			}
		}
	}

	// Updates the HTML file
	fs.writeFile(output_path + html_file_name, data, "utf-8", function (err) {
		if (err) return console.log(err);
		console.log('\n**********************************');
		console.log('*                                *');
		console.log('*   File Parsed with Success!!   *');
		console.log('*                                *');
		console.log('**********************************\n');
	});
});