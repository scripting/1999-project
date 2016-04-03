## How updating works

The server automatically checks for updates every fifteen minutes. This is of course, configurable. That's what this document explains. 

The update server is GitHub. The <a href="https://github.com/scripting/nodeStorage">nodeStorage repo</a> as the official release version. 

When there's a new version your server will automatically update itself, unless you've configured it not to. However it will not automatically restart. You can set it up so it does. See the section below. 

#### How to configure updates

You can configure the updates through config.json by specifying a top-level object named <i>updates. </i>It has three optional elements, <i>enabled, fnameStorageJs </i>and <i>ctMinutesBetwChecks. </i>

If enabled is false, it won't check for updates. 

If you've changed the name of storage.js, set fnameStorageJs to the name of the file (that's the file it will update). I like to change the name so if I'm running more than one instance of the storage server on a system I can tell which is which when looking at a <i>forever</i> list. 

Change ctMinutesBetwChecks if you want it to check more or less frequently.

#### Automatic restart on change

You can set it so that your server automatically quits when there's been a change to a file you can specify. If you're running a utility like forever, it can then relaunch the server. 

Turn the feature on with <i>flWatchAppDateChange.</i> And specify the file it should watch with <i>fnameApp.</i>

#### Example

Here's an <a href="https://gist.github.com/scripting/06137a624152a1bda3fa747c16bb8aa7">example</a> of a config.json that has an <i>updates</i> object and automatically restarts when there's a change to the main JavaScript file. 

