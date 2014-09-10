Parseiro - The HTML Parser
======================

**Parseiro** simply parses the variables in the HTML file, converting them into values.

======================
###Sumary###

1. [Example](#example)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Notes](#notes)
5. [Tips](#tips)
6. [Requirements](#requirements)
7. [Contribute](#contribute)

======================
###Example###

In this example, **Parseiro** will get all variables inside the **#{  }** tag and replace them with their respective values, set in the **config.json**.

  > `<a href="#{first-link}">First link</a>`

  > `<a href="#{second-link}">Any other link</a>`

  > `<img src="#{highlight-image}" alt="This is my Awesome image!">`

  > `<p>#{cool-text}</p>`

The **config.json** file for this example would look like this:

```json
{
    "links": [
        { "first-link"      : "http://www.google.com" },
        { "second-link"     : "http://nodejs.org" },
        { "highlight-image" : "http://lorempixel.com/400/200/animals" },
        { "cool-text"       : "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
    ]
}
```
*Checkout the Demo folder, for a better understanding.*

======================
###Installation###

Run the following command in your command line tool;

> npm install parseiro

======================
###Usage###

Once you have installed it in your system, follow the steps bellow:

1. Modify your *html* file, placing the **variables** where it is needed
2. Set the values of the **variables** in the *config.json* file
3. Run the command **`parseiro <file_name.html>`** ( without the <  > ) from your command line tool, and your *parsed file* will be placed at the **output folder**

======================
###Notes###

The **`<file_name.html>`** must be the name of the **file that you want to parse**.

The output folder will be created automatically **in the same folder** of you html file

======================
###Tips###

Your **config.json** can be placed anywhere, and you can have **multiple config.json** files in **multiple places**, then you should specify the destination of the file on the command line, like so:

> **`parseiro <file_name.html> C:\Test\config.json`**

This way, you can have multiple configurations for diferent HTML templates.

======================
###Requirements###

The only requirement is that you have **[node.js](http://nodejs.org/)** and **parseiro package** installed on your system.

======================
###Contribute###

Please leave your comments, doubts, opinions!

Thanks for using it!

Made with ♥ by [Alessandro Dias](https://www.facebook.com/ale.bruno.dias).
