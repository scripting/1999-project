## 1999-project



1999.io needs a place for docs, support, sample code, and a place to store the default templates. This is that place.



#### Updates

##### v0.42 - 4/2/16 by DW

Added docs for publish callbacks. 

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

