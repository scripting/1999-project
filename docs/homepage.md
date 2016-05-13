## How to customize the editor

If you run your own 1999 server you can customize the experience for people using the 1999 editor by adding an object to your config.json file.

These customizations are totally optional. 

#### An example

Here's an <a href="https://gist.github.com/scripting/9e3ac0cb4c17d0ae566d3ce240b4d81e">example config.json</a> that contains a <i>homePage</i> object. 

Two items are specified in that object, productnameForDisplay and urlPageTemplate. 

#### productnameForDisplay

This sets the string that appears in the upper left corner of the editor. 

I've set it to BloatWare for my test server, here's a screen shot showing what that looks like.

If you're hosting blogs for other people, you might want to change that to the name of your organization.

#### urlPageTemplate

This sets the default template used for rendering pages. 

It must be the address of a plain text file containing the HTML code with macros for the template file. 

It can be a local URL on your server, as shown in the example. I put the file in publicFiles/data/mytemplate.html.

But you don't have to put it on your server, you can put it anywhere that's publicly accessible by your users' machines. 

If the user designs their own template it overrides this choice. It's only used when the user has not customized their template, or we can't read the user's template. 

