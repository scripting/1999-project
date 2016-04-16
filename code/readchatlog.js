var myProductName = "Read ChatLog", myVerion = "0.40a";

/* This script reads a chatLog.json file
	We write the titles of each of the posts to the console. 
	Each line begins with the ID of the post, followed by the title, followed by the date and time it was posted.
	The only point here is to prime the pump a little, to get people thinking of apps they might build off the chatLog.json files.
	
	4/16/16 by DW
	*/

var urlMyChatLog = "http://friends.farm/users/davewiner/chatLog.json";
var request = require ("request");

function getTitle (item) {
	if ((item.payload !== undefined) && (item.payload.title !== undefined)) {
		return (item.payload.title);
		}
	return ("");
	}
function getUrlRendering (item) {
	if ((item.payload !== undefined) && (item.payload.urlRendering !== undefined)) {
		return (item.payload.urlRendering);
		}
	return ("");
	}
function getImage (item) {
	if ((item.payload !== undefined) && (item.payload.image !== undefined)) {
		return ("<img style=\"float: right; margin-left: 24px; margin-top: 14px; margin-right: 14px; margin-bottom: 14px;\" src=\"" + item.payload.image +"\">");
		}
	return ("");
	}
function isPublished (item) {
	if ((item.payload !== undefined) && (item.payload.flPublished !== undefined)) {
		return (item.payload.flPublished);
		}
	return (false);
	}
function formatDateTime (d) {
	d = new Date (d);
	return (d.toLocaleDateString () + " at " + d.toLocaleTimeString ());
	}

request (urlMyChatLog, function (err, response, jsontext) {
	if (err) {
		console.log ("readchatlog.js: err.message == " + err.message);
		}
	else {
		var theLog = JSON.parse (jsontext);
		for (var i = theLog.chatLog.length  - 1; i >= 0; i--) { //list in reverse chronologic order
			var item = theLog.chatLog [i];
			if (isPublished (item)) {
				console.log (item.id + ": " + getTitle (item) + ", " + formatDateTime (item.when));
				}
			}
		}
	});

