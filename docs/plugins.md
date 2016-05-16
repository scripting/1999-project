## Editor plugins

I want to make it easy for people to add their own editors to 1999.io, playing various roles. 

The plugins described here appear in the new PlugIns menu in 1999.io. When you choose one of the plugins a new page opens. What's on that page is entirely up to the plugin author. The first plugin I'm releasing is a simple lightweight template editor. 

Plugins talk to the server via the JavaScript API. The user does not have to log in to the plugin because they have access to the same credentials that 1999.io has access to since they run in the same domain. The data is stored in localStorage, but you don't have to worry about that, because you access the server through the API routines that already know what to do with the localStorage values.

Obviously, sysops have to be careful about the plugins they run.

Key point: The plugins can do anything 1999.io does. It would be possible to write a whole new editor for 1999.io websites. Or write specialized tools that do things that 1999.io does not do. The hope is that many such plugins will be written.

#### How to configure

There's a new top-level section in config.json, plugIns, for configuring the pluglins. Here's an <b>example</b> config.json that has a plugIns section.

Each plugin has an identifier, which is the name of the sub-object, a value called name, which is what's displayed in the PlugIns menu, and url which is the address of the HTML page for the plugin.

#### How the plugins are accessed

Suppose you have a plugin whose identifier is imageEdit, and your server is running on designshop.com. 

Then the address of the plugin would be http://designshop.com/plugin?name=imageEdit

#### The templateEdit plugin

The only plugin I'm releasing along with the plugins feature is templateEdit. 

When you choose it from the PlugIns menu, a new page opens with the text of template in the edit box.

When you click the Update button, the template is saved. This means that all future page builds on this site will flow through this version of the template.

Also this is not reversible. You will no longer be able to edit the template using the outline editor in the Main menu in 1999.io. This is a very important point.

However there is an escape clause. If you have access to the server, you can undo this by deleting misc/template.html in the user's public folder.

#### Writing your own plugin

The source code for the <a href="https://github.com/scripting/1999-project/blob/master/code/templateedit.html">templateEdit</a> plugin is in the code folder in this repo. It's meant to serve as example code for the kinds of things plugins do. 

