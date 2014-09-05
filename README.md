email-marketing-parser
======================

Parse links on an *html* file, replacing variables with values.

======================
### Example: ###

In this example, we are replacing **#{link_name}** by **http://www.google.com**:

  > `<a href="#{link_name}">Google</a>` becomes `<a href="http://www.google.com">Google</a>`

This value was set in our **config.json** file, as well as the name of our *html file*.

```json
{
	"file_name": "your_file_name.html",
	"links": [
		{ "link_name" : "http://www.google.com" }
	]
}
```

======================
### Installation & Usage: ###

1. Download the *.zip* file from github
2. Extract it anywhere you want
3. Copy the *html* file that you want to replace the variables into the root of the folder you have extracted it
4. Configure the **file_name** and the **links variable keys** in the *config.json*
5. Run the command **node parse.js** from your prompt/terminal
6. That's it! Your parsed file will be placed at the output folder

======================
### Requirements: ###

The only requirement is that you have **[node.js](http://nodejs.org/)** installed on your system.

======================
### Contribute Please!! ###

Leave your comments, doubts, opinions!
Thanks for using it!

Made with ♥ by [Alessandro Dias](https://www.facebook.com/ale.bruno.dias).
