## 1999-project

  

1999.io needs a place for docs, support, sample code, and a place to store the default templates. This is that place.



#### Updates

##### v0.60 - 9/17/16 by DW

You can now specify the text on the home page of your 1999.io installation.

##### v0.59 - 9/4/16 by DW

You can now <a href="http://blog.1999.io/2016/09/04/editingFacebookAndTwitterMetadata.html">edit the Twitter and Facebook metadata</a> for each post in 1999.io. 

The <a href="https://github.com/scripting/1999-project/blob/master/defaults/template.html">default template</a> was updated accordingly. 

##### v0.58 - 8/14/16 by DW

Added <a href="https://github.com/scripting/1999-project/blob/master/docs/plugins.md#the-editors-menu-in-1999io">docs</a> explaining how to set up the Editors menu for 1999.io users.

##### v0.57 - 8/11/16 by DW

Added <a href="https://github.com/scripting/1999-project/blob/master/docs/s3.md">docs</a> showing how to use S3 storage instead of the local filesystem. 

##### v0.56 - 8/10/16 by DW

Added <a href="https://github.com/scripting/1999-project/blob/master/docs/homepage.md#googleanalyticsaccount">docs</a> for new googleAnalyticsAccount configuration option.

##### v0.55 - 7/24/16 by DW

New <a href="https://github.com/scripting/1999-project/blob/master/docs/docker.md">instructions</a> for running 1999-server on Docker.

##### v0.54 - 7/8/16 by DW

Added a <a href="https://github.com/scripting/1999-project/blob/master/docs/ec2.md">doc</a> for the EC2 machine image.

##### v0.53 - 6/6/16 by DW

Added a new <a href="https://github.com/scripting/1999-project/tree/master/code/monthlyArchives">utility app</a> that generates monthly archive pages. The feature was recently added to 1999.io. This builds archive pages for months before the feature came online. I'm using this app to generate the pages for <a href="http://scripting.com/">Scripting News</a>. 

##### v0.52 - 6/4/16 by DW

Added <a href="https://github.com/scripting/1999-project/blob/master/misc/about.opml">about.opml</a> to the new <a href="https://github.com/scripting/1999-project/tree/master/misc">misc</a> folder. It's just there to support review work on the About page for 1999.io. Using GitHub you will be able to follow changes to the document. 

##### v0.51 - 5/30/16 by DW

The new domains configuration option is <a href="https://github.com/scripting/1999-project/blob/master/docs/domains.md">documented</a>. 

##### v0.50 - 5/16/16 by DW

<a href="https://github.com/scripting/1999-project/blob/master/docs/plugins.md">PlugIns</a> are now available in 1999.io. A new howto says how servers set them up and the <a href="https://github.com/scripting/1999-project/blob/master/docs/plugins.md#the-templateedit-plugin">templateEdit</a> plugin is documented.

##### v0.49 - 5/13/16 by DW

New <a href="https://github.com/scripting/1999-project/blob/master/docs/homepage.md">howto</a> shows how to configure the homepage of the editor.

##### v0.48 - 4/27/16 by DW

Added a template for the <a href="https://github.com/scripting/1999-project/issues">Issues section</a>, per the <a href="https://github.com/blog/2111-issue-and-pull-request-templates">instructions</a> on the GitHub site. 

Thanks to the <a href="https://github.com/yabwe/medium-editor">medium-editor</a> project for the example. 

##### v0.47 - 4/17/16 by DW

<a href="https://github.com/scripting/1999-project/blob/master/code/websocketdemo.html">Demo app</a> for websocket support in 1999.io server. You can hook it up to your chatlog, and see how you might develop a client app for your blog using the realtime power of WebSockets. One of the few real-world demos for WebSockets. 

Note: This app previously was in its own <a href="https://github.com/scripting/1999client">repository</a>. It really belonged in this collection of demos. 

Also: You can run this app from a <a href="http://1999.io/docs/code/websocketdemo.html">web page</a> on 1999.io.

##### v0.46 - 4/16/16 by DW

New sample app, <a href="https://github.com/scripting/1999-project/blob/master/code/readchatlog.js">readchatlog.js</a>. Reads a chatLog.js file, which contains all the information about a user's blog, and lists each item to the console, including the ID, title and when it was posted. Just want to get people thinking of apps they might build off the chatLog.json files. 

##### v0.45 - 4/12/16 by DW

New <a href="https://github.com/scripting/1999-project/blob/master/docs/macros.md">docs page</a> on macros that are available to templates while pages are being rendered.

##### v0.44 - 4/8/16 by DW

Updates to the setup docs.

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

