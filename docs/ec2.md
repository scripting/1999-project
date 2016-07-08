## EC2 machine image for 1999 server

Now you can launch a 1999.io server from an Amazon AMI. 

It's even easier than the basic Ubuntu setup, because I've done most of the installation for you. It just needs a few bits and you're ready to go.

Note: These are not poet-level instructions, they're for people with a little experience setting up an AMI and DNS. 

#### How to

The AMI is ami-abcd2fc6. It's public. 

It can be a micro instance. And it should qualify for the free tier, meaning if you're new to AWS you can run it for free for a year.

These ports should be open -- 22, 80, 81, 1999, 2000.

You should assign a domain to the IP address allocated for the server. That will be the value for myDomain in config.json.

Once the instance is running, edit config.json, as explained in the howto, change myDomain, twitterConsumerKey and twitterConsumerSecret as explained in the setup howto. (You don't have to create it, it's already there.)

Map port 80 to port 1999. Here's the magic incantation that does that: 

<pre>sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 1999</pre>

