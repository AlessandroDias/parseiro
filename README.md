email-marketing-parser
======================


Parse links on an E-mail Marketing html file, replacing variables with values.

It transforms:

  > `<a href="#link_name#">Google</a>` 
  
  into this:
  
  > `<a href="http://www.google.com.br&search=%s">Google</a>`
