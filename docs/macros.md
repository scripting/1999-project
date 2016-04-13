## Macros

When 1999 renders a page, as part of the process, it passes the text through the pagetable. 

The pagetable is a JavaScript object with names and values. For example, pagetable.title might have the value <i>Test post</i> or pagetable.authorFacebookAccount might be <i>bull.mancuso.</i>

As the page is rendered, [%title%] would be replaced with <i>Test post,</i> and [%authorFacebookAccount%] would be replaced with <i>bull.mancuso. </i>

Here's a <a href="https://gist.github.com/scripting/8953ca1e995b19303243c03a0bc0f3f7">snapshot</a> of the pagetable for a page I rendered on my test server. Any of those values could be used in the template for the page.

#### Where the values come from

The pagetable is built from a variety of sources. Some of them come from the server, like the name of the product, and the address of the API server and WebSocket server. Some of the values are stats kept by the editor, such as ctStartups, or prefs such as flAutoSave. Most of these wouldn't be too useful in a template.

Some of the values come from Twitter, when we authenticate. For example, personName and profileImageUrl.

#### The pagetable at runtime

The pagetable is also available to JavaScript code running in the rendered page. It's a global called pagetable. 

This is the information the default page code uses to put up the prev and next arrows, and the elements in the footer. 

If you open up the JavaScript console you can inspect it. Or you can type viewPagetable () to get a JSONified rendering of the table.

You'll see that there's more information accessible here, because the pagetable contains objects. Information about the prev and next story pages. All the information about the item behind the rendering as an object. 

Here's a <a href="https://gist.github.com/scripting/ad9d9f81e7277ab21d0888edc3686713">snapshot</a> of the runtime version of the pagetable for the example page. 

#### Historical note

The <a href="https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=site%3Ascripting.com%20pagetable">pagetable</a> has been in all my web CMSes going back to 1996 and the first website framework. It just sort of happened, but it works beautifully as a way for values to be passed from the editor through the rendering process and into the page at runtime.

