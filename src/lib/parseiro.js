#!/usr/bin/env node
'use sctrict'

/************
 * Parseiro *
*************/
var Parseiro = (function() {
	var fs = require('fs'),
		path = require('path'),
		html_file,
		config_file,
		config_file_data,
		config_file_content,
		output_path;

	function parseHTMLFile() {
 		var userArgs = process.argv.slice(2);

 		if ( (userArgs) && (userArgs[0])) {
 			html_file = userArgs[0];
			config_file = userArgs[1] || 'config.json';
			output_path = path.join(path.dirname(fs.realpathSync(html_file)), '/output/');

			if ( (fs.existsSync(html_file)) && (fs.existsSync(config_file)) ) {
				readConfigFile();
			}
 		} else {
 			printMessage('Error!! Enter the name of the HTML file');
 		}
	}

	// Reads config.json file
	function readConfigFile() {
		fs.readFile(config_file, 'utf8', function(err, data) {
			if (err) {
				printMessage('Could not read file config.json');
				return;
			}

			config_file_data = data;
			getConfigs();
		});

	}

	function getConfigs() {
		try	{
			config_file_content = JSON.parse(config_file_data);
			readHTMLFile();
		} catch (e) {
			printMessage('Invalid JSON file at: ' + config_file);
			return;
		}
	}

	function readHTMLFile() {
		fs.readFile(html_file, "utf-8", function (err, data) {
			if (err) {
				printMessage('File Not Found: ' + html_file);
				return;
			}

			for ( var i = 0, j = config_file_content.links.length; i < j; i++ ) {

				for ( var key in config_file_content.links[i] ) {

					var str_find = '#{' + key + '}';
					var str_replace = config_file_content.links[i][key];
					var count = data.split(str_find).length -1;

					for ( var k = 0, l = count; k < l; k++ ) {
						data = data.replace(str_find, str_replace);
					}
				}
			}

			// Saves the parsed HTML file at the '/output' folder
			fs.exists(output_path, function(exists) {
				if (!exists) {
					fs.mkdir(output_path);
				}

				fs.writeFile(output_path + html_file, data, "utf-8", function (err) {
					if (err) {
						printMessage('Could not save file at: ' + output_path);
						return;
					}
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

	return parseHTMLFile();

})();

module.exports = Parseiro;