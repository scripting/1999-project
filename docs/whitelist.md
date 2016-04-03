## Setting up a whitelist

If you want your 1999 server to be open for anyone to create a blog there, then you don't need to specify a whitelist. However if you want to limit who can set up a blog, you need a whitelist. 

#### What is a whitelist?

It's an array of Twitter screen names named <i>userWhitelist</i> that you add to your config.json file. 

An <a href="https://gist.github.com/scripting/2b2aa87ffbd4e0218f380f64c58ded87">example</a> of a config.json with a userWhitelist specified. 

#### You can also put it in a separate file

If you want more flexibility in editing your whitelist, you can put it in a separate file accessible over HTTP. Here's an <a href="http://1999.io/docs/examplewhitelist.json">example</a> of such a file.

Instead of putting the array directly in your config.json file, you would point to it using the <i>urlUserWhitelist</i> value.

The server reads the whitelist file once a minute, so you can change the whitelist without restarting the server. config.json is only read when the server starts up. 

Here's an <a href="https://gist.github.com/scripting/d6bc1d750e4c5fb27d2bb13779f3d711">example</a> of a config.json file that specifies a remote whitelist file.

