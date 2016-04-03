## How to set up a 1999 server

1999.io is a new blogging environment that's fast and easy, and has lots of features no other blogging software has. I'll write a FAQ that explains the feature set, but for now this is a doc that shows you how to set up a 1999 server on Ubuntu.



#### Overview

1. 1999's server is also called nodeStorage. It's just a special configuration of that software. 

2. It's written in JavaScript and runs under Node.js.

#### Install Node.js

<pre>sudo apt-get update

sudo apt-get install nodejs

sudo apt-get install npm

sudo apt-get install nodejs-legacy</pre>

We also install <a href="https://www.npmjs.com/">npm</a>, a requirement to run Node apps. 

<a href="https://packages.debian.org/sid/nodejs-legacy">nodejs-legacy</a> makes it possible to run apps by saying <i>node app.js</i> instead of having to use nodejs, an oddity of Ubuntu.

#### Install git

<pre>sudo apt-get install git</pre>

I like to install git, because it makes it easy to install nodeStorage from GitHub.

#### Download nodeStorage

nodeStorage is the name of the 1999 server software. It can be used for other apps. This doc shows you how to set it up for running 1999.

<pre>git clone https://github.com/scripting/nodestorage.git</pre>

#### Install it

Change into the nodestorage directory you created in the previous step. 

<pre>cd nodestorage

npm install</pre>

#### Create config.json

Launch your favorite Unix editor. I like <a href="http://mintaka.sdsu.edu/reu/nano.html">nano</a> because I'm a newbie, and it has a nice menu at the bottom of the screen if you don't know the commands.

<pre>nano config.json</pre>

Here's a <a href="https://gist.github.com/scripting/ae6d50ce73fcdb02c51b#file-config-json">template</a> for config.json, copy the text, and paste it into nano in your terminal window.

Now I'm going to go through all the elements step by step, explaining what you have to do to set their values.

1. myPort -- enter the number of the port you want to use. Make sure that this port is open in your firewall, if you have one on this server.

2. websocketPort -- we use a technology called WebSockets to push updates back to the editing app, and to pages that people are reading. So you must specify a port for the WS server to run on, and as with the main HTTP port, above, it must be open in your firewall.

3. myDomain -- enter a domain name that points to this server. If you don't have one, you can enter the IP address of the machine, it will work as well as the domain name. Be sure to include the port you're using in the domain, as shown in the example.

4. where -- leave it as-is. It will store the public and private files in sub-folders of the nodestorage folder.

6. twitterConsumerKey and twitterConsumerSecret -- I'll explain how to set this up in the next section. For now, leave them as set in the example. The strings are nonsense, just placeholders.

Save the file by typing Control-O, then exit with Control-X.

#### Set up your Twitter app

1. Go to <a href="https://apps.twitter.com/">apps.twitter.com</a> and click Create New App in the upper-right corner.  A page with a form appears, asking for details of your app.

2. Give your app a name. If it's for your book club, you could call it The Hometown Book Club Blogs. If the name is already being used by someone, choose a different name. For my example I used "My test editor 2789". It was available. ;-)

3. The website URL will be the value for myDomain specified in your config.json file, as an HTTP url. From the example, it would be http://1999.bullmancuso.io:1999/

4. The callback URL for nodeStorage instances is the url of the app, as specified in the previous step, followed by "callbackFromTwitter" (don't include the quotes).

5. If it all worked, you should have a Twitter app set up. Click on the Test OAuth button in the upper-right corner of the page, and it will show you two values, consumer key and consumer secret. 

6. In the terminal, press Control-C to quit nodeStorage. 

7. Open config.json in your editor, and replace the placeholder values for twitterConsumerKey and twitterConsumerSecret with these values and save the file. 

#### Launch nodeStorage

<pre>node storage.js</pre>

#### Test your setup

1. Go to the home page of your server. In the example above it would be http://1999.bullmancuso.io:1999/.

1. You should see a page a menu on the right edge of the menu bar entitled <i>Sign on here.</i>

2. From that menu choose <i>Sign on Twitter...</i>

5. You should get the Twitter authorization page. Authorize your app.

6. It should send you back to your home page, where you should see an edit box at the top and a few menus. Type some text in the box and click the Post button. 

7. If it worked, you should see a new post below that. If you click on the wedge you'll see a menu of options for the post. If you click on the Eye icon next to the menu you should see a rendering of the page. 

9. Pat yourself on the back. You are now a DevOps dudess or duderino. On your way to being a Full Stack Developer. ;-)

