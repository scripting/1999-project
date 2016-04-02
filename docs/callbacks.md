## Callbacks for 1999 server

The callbacks folder is automatically created at the top level of the nodeStorage folder when the first post is published. 

It has a single sub-folder called publish. Each script in that folder will be called for each post that's published. A script is a file with a .js extension. The script has four values set up as globals: relpath, body, type and screenName. 

<i>relpath</i> is the path to the file that's being written relative to the base of the user's folder. Something like 2018/05/02/0012.html. 

<i>body</i> is the contents of the file. 

<i>type</i> is a mime type, something like text/html or application/json. 

<i>screenName</i> is the name of the user who is publishing the file.

It's enough information to mirror the file in another location, as an example. I use it to keep a copy of my writing in a folder on scripting.com. 

Here's an <a href="https://gist.github.com/scripting/d431606e3eb8673d9acba00c7231ec94">example</a> of a callback script for publish. 

