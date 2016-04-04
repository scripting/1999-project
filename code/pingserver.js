/* This script handles requests that come into ping.1999.io
	It maintains a JSON file in the same directory as the script that counts updates 
	for each RSS file maintained by each of the participating 1999 servers.
	
	It's designed to be run by the PagePark web server, but could be modified to be run
	in any web server that can run JS scripts. 
	
	4/4/16; 10:45:25 AM by DW
	*/
var urlFeed = parsedUrl.query.urlFeed;
if (urlFeed !== undefined) {
	var now = new Date (), fname = "domains/ping.1999.io/pingers.json";
	fs.readFile (fname, function (err, data) {
		var jstruct = new Object ();
		if (!err) {
			jstruct = JSON.parse (data.toString ());
			}
		if (jstruct [urlFeed] === undefined) {
			jstruct [urlFeed] = {
				ct: 1,
				when: now
				}
			}
		else {
			jstruct [urlFeed].ct++;
			jstruct [urlFeed].when = now
			}
		fs.writeFile (fname, JSON.stringify (jstruct, undefined, 4));
		});
	}
"Thanks for the ping!";
