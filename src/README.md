HTML Parser
======================

Parse links on an *HTML* file, replacing variables with values.

======================
### Example: ###

In this example, we will replace all variables with their respective values, set in the **config.json**.

  > `<a href="#{first-link}">First link</a>`

  > `<a href="#{second-link}">Any other link</a>`

  > `<img src="#{highlight-image}" alt="This is my Awesome image!">`

  > `<p>#{cool-text}</p>`

The **config.json** file for this example would look like this:

```json
{
    "file_name": "index.html",
    "links": [
        { "first-link"      : "http://www.google.com" },
        { "second-link"     : "http://nodejs.org" },
        { "highlight-image" : "http://lorempixel.com/400/200/animals" },
        { "cool-text"       : "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
    ]
}
```
*Don't forget to change the value of the  __"file_name"__ key!!*


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
