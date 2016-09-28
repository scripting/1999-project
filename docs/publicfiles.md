## You can put your public files anywhere

There's a value in config.json called <i>publicFiles</i> that specifies where the server keeps the public files for each user. It defaults to <i>publicFiles/</i> which stores the files in the same folder as the storage.js app, but you can tell it to put the public files anywhere that can be reached through the file system.

For example, I set up the server to store the public files on an external hard disk called Broadway in a 1999 folder, in this <a href="https://gist.github.com/scripting/a60b16e36edf01de43b8d8e74aa4d87e">config.json file</a>.

A common use-case for this is to store the public files in a folder that's served by a web server like nginx or Apache. Note that you don't have to do this because nodeStorage is also a web server and can serve the files it generates. But there are also good reasons to use different server software.

If you're moving the files from an existing installation, be sure to copy the files from the original folder to the new place. 

