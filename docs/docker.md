## Running 1999 server on Docker

My longtime friend <a href="https://github.com/donpark">Don Park</a> got this together. Many thanks to Don! ;-)

#### Preparing

The first step is to get Docker running on your server. I created a server on Digital Ocean and then followed their <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04">instructions</a> for installing Docker. 

You need to have three bits of information available:

1. A domain name for the server. 

2. Your Twitter consumer key, as explained in the docs for config.json.

3. The Twitter consumer secret.

#### The command

Here's a command that launches the server with the HTTP server on port 80, and the websocket server on port 2000. 

The domain name is oakland.myserver.com (it should point to this server, of course), the consumer key is 12345 and the secret is 67890.

<pre>sudo docker run -p 80:1999 -p 2000:2000 --name nodestorage -d --restart=unless-stopped \

-e "myDomain=oakland.myserver.com" \

-e "twitterConsumerKey=12345" \

-e "twitterConsumerSecret=67890" \

davew/nodestorage:latest

</pre>

After running the command you should be able to access your server through http://oakland.myserver.com/.

#### Pointers

Amazon has a <a href="http://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html">Docker service</a>.

Here's a <a href="https://github.com/wsargent/docker-cheat-sheet">cheat sheet</a> website for Docker commands.

#### Frequent commands

sudo docker images -- list all the images you have installed on this machine

sudo docker ps -- list the containers

sudo docker stop nodestorage -- stop the nodestorage container

sudo docker rm nodestorage -- remove the nodestorage container

