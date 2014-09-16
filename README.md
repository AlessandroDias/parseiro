Parseiro - The HTML Parser
======================

**Parseiro** simply parses the variables in the HTML file, converting them into values.

======================
###Sumary###

1. [Example](#example)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Tips](#tips)
5. [Requirements](#requirements)
6. [Contribute](#contribute)

======================
###Example###

In this example, **Parseiro** will get all variables inside the **#{  }** tag and replace them by their respective values, set in the **config.json**.

The **index.html** file:
```html
  <a href="#{first-link}">First link</a>

  <a href="#{second-link}">Any other link</a>

  <img src="#{highlight-image}" alt="This is my Awesome image!">

  <p>#{cool-text}</p>
```

The **config.json** file for this example:
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
*See the Demo, for a better understanding.*

======================
###Installation###

```shell
npm install -g parseiro
```

======================
###Usage###

Once you have installed it in your system, follow the steps bellow:

1. Set the **variables** in your *html* file
2. Set their values in the *config.json* file
3. Run the following command from the command line, and your *parsed file* will be placed at the **output folder**

```
  parseiro <file_name.html>
    e.g. parseiro index.html
```

*The output folder will be created automatically __in the same folder__ of you html file*

======================
###Tips###

You can have multiple configurations for diferent HTML templates. For that, you just need to specify the path of the **config.json** file on the command line, like so:

```
  parseiro <file_name.html> <config file path...>
    e.g. parseiro index.html C:\Test\config.json
```

======================
###Requirements###

The only requirement is that you have **[node.js](http://nodejs.org/)** and **parseiro package** installed on your system.

======================
###Contribute###

Please leave your comments, doubts, opinions!

Thanks for using it!

Made with ♥ by [Alessandro Dias](https://www.facebook.com/ale.bruno.dias).
