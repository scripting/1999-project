## 1999-project

  

1999.io needs a place for docs, support, sample code, and a place to store the default templates. This is that place.



#### Updates

##### v0.44 - 4/6/16 by DW

New <a href="https://github.com/scripting/1999-project/blob/master/code/breakupchatlog.js">utility script</a> for breaking up big chatLog.json files, one file per month in a sub-folder called months/.

##### v0.43 - 4/4/16 by DW

Started a new code folder for sample code. First bit of code I'm sharing is the <a href="https://github.com/scripting/1999-project/blob/master/code/pingserver.js">source</a> for ping.1999.io, designed to run as a <a href="http://pagepark.io/">PagePark</a> script. 

##### v0.42 - 4/2/16 by DW

Added docs for <a href="https://github.com/scripting/1999-project/blob/master/docs/callbacks.md">publish callbacks</a>.

Moved the <a href="https://github.com/scripting/1999-project/blob/master/docs/setup.md">startup docs</a> from the blog.

Two more: <a href="https://github.com/scripting/1999-project/blob/master/docs/updating.md">updating</a> and <a href="https://github.com/scripting/1999-project/blob/master/docs/whitelist.md">whitelist</a>.

##### v0.41 - 4/2/16 by DW

Made a small change to template.opml. There's a new macro on the page title: [%defaulttitlestyle%].

<code>&lt;div class="divMessageTitle" id="idMessageTitle" [%defaulttitlestyle%]>[%title%]&lt;/div></code>

For story pages its the empty string, but for the home page it's: " style=\"display: none;\" "

This stops the title from flashing when the home page is displayed. I found it really ugly and unacceptable.

Now, if you've modified your template, and you want this functionality you'll have to add this to your template. 

##### v0.40 - 4/2/16 by DW

Started the project off with the <a href="https://github.com/scripting/1999-project/tree/master/defaults">defaults</a>. 

Included are the default menubar and template in OPML and the menubar in HTML.

These will stay updated along with any changes I make to the ones actually used by the 1999.io app.

They're provided as a reference and a way to track changes to the templates. 

