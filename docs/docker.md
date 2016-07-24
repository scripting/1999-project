## Running 1999 server on Docker

My longtime friend Don Park got this together. Many thanks to Don! ;-)

#### Preparing

The first step is to get Docker running on your server. I created a server on Digital Ocean and then followed their instructions for installing Docker. 

You need to have three bits of information available:

1. A domain name for the server. 

2. Your Twitter consumer key, as explained in the docs for config.json.

3. The Twitter consumer secret.

#### The command

Here's a command that launches the server with the HTTP server on port 1999, and the websocket server on port 2000. The domain name is oakland.myserver.com, the consumer key is 12345 and the secret is 67890.

<pre>sudo docker run -p 1999:1999 -p 2000:2000 --name nodestorage -d --restart=unless-stopped \

-e "myDomain=oakland.myserver.com:1999" \

-e "twitterConsumerKey=12345" \

-e "twitterConsumerSecret=67890" \

davew/nodestorage:latest

</pre>

