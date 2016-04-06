var myProductName = "Break Up Chatlog", myVerion = "0.40b";

var request = require ("request");
var fs = require ("fs");

var urlChatlogJs = "http://friends.farm/users/davewiner/chatLog.json";

function padWithZeros (num, ctplaces) { 
	var s = num.toString ();
	while (s.length < ctplaces) {
		s = "0" + s;
		}
	return (s);
	}
function jsonStringify (jstruct, flFixBreakage) { 
	//Changes
		//6/16/15; 10:43:25 AM by DW
			//Andrew Shell reported an issue in the encoding of JSON that's solved by doing character replacement. 
			//However, this is too big a change to make for all the code that calls this library routine, so we added a boolean flag, flFixBreakage.
			//If this proves to be harmless, we'll change the default to true. 
			//http://river4.smallpict.com/2015/06/16/jsonEncodingIssueSolved.html
	if (flFixBreakage === undefined) {
		flFixBreakage = false;
		}
	var s = JSON.stringify (jstruct, undefined, 4);
	if (flFixBreakage) {
		s = s.replace (/\u2028/g,'\\u2028').replace (/\u2029/g,'\\u2029');
		}
	return (s);
	}
function readChatlog (callback) {
	request (urlChatlogJs, function (err, response, jsontext) {
		if (err) {
			console.log ("readChatlog: err.message == " + err.message);
			callback (undefined);
			}
		else {
			callback (jsontext);
			}
		});
	}
function startup () {
	console.log ("\n" + myProductName + " v" + myVerion);
	
	readChatlog (function (jsontext) {
		try {
			var theLog = JSON.parse (jsontext), lastMonth = -1, currentArray = new Array ();
			function writeArray () {
				if (currentArray.length > 0) {
					var yearPart = new Date (currentArray [0].when).getUTCFullYear ().toString ();
					var f = "months/" + yearPart + "." + padWithZeros (lastMonth, 2) + ".json";
					console.log ("Writing " + currentArray.length + " item(s) to file " + f);
					fs.writeFileSync (f, jsonStringify (currentArray));
					}
				}
			for (var i = 0; i < theLog.chatLog.length; i++) {
				var item = theLog.chatLog [i], when = new Date (item.when), theMonth = when.getUTCMonth () + 1;
				if (theMonth != lastMonth) {
					writeArray ();
					lastMonth = theMonth;
					currentArray = new Array ();
					}
				currentArray [currentArray.length] = item;
				}
			writeArray ();
			}
		catch (err) {
			console.log ("startup: urlChatlogJs == " + urlChatlogJs + ", err.message == " + err.message);
			}
		});
	
	
	}

startup ();
