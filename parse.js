var fs = require('fs'),
	input_path = __dirname + '/',
	output_path = input_path + '/output/',
	json_file,
	config_file,
	html_file_name;

// reads json config file
fs.readFile(input_path + 'config.json', 'utf8', function(err, data) {
	if (err) {
		printMessage('Could not read file config.json');
		return;
	}
	json_file = data;
	getConfigs();
});

function getConfigs() {
	try	{
		config_file = JSON.parse(json_file); 		// json file parsed
		html_file_name = config_file["file_name"];	// Name of the HTML file
		readFileContents();
	} catch (e) {
		printMessage('Invalid JSON file');
		return;
	}
}

function readFileContents() {
	fs.readFile(input_path + html_file_name, "utf-8", function (err, data) {
		if (err) {
			printMessage('File Not Found: ' + html_file_name);
			return;
		}

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

		fs.exists(output_path, function(exists) {
			if (!exists) {
				fs.mkdir(output_path);
			}
			// Updates the HTML file
			fs.writeFile(output_path + html_file_name, data, "utf-8", function (err) {
				if (err) return console.log(err);
				printMessage('File Parsed with Success!!');
			});
		});

	});
}

function printMessage(message) {
	var delimiter = '',
		character = '*';

	for ( var i = 0, j = message.length + 5; i < j; i++) {
		delimiter = delimiter + character;
	}

	console.log('\n' + delimiter + '\n');
	console.log('-  ' + message + '')
	console.log('\n' + delimiter + '\n');
}