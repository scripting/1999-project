## Mapping a domain to a blog

You can set up a server, through config.json, to map domains to blogs.

#### How to

Add a new top-level object in config.json called domains. It contains strings. The name of each string is a domain to be mapped. The value of each string is the path to the public file it points to.

Here's an <a href="https://gist.github.com/scripting/c6ea81a23ae1291d15be9e968bb178ae">example config.json</a> set up to map trump.1999.io and blog.1999.io to their respective sites. 

#### How it works

The conversion happens in both directions. When a client requests a page using the domain name, we fetch the content at the location indicated by the value. 

And if there's a reference to a page that's accessible through the domain map, we redirect to the short version. 

