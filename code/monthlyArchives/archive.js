var myProductName = "Monthly Archive", myVerion = "0.40b";

var utils = require ("./lib/utils.js");
var dateFormat = require ("dateformat");
var filesystem = require ("./lib/filesystem.js");
var fs = require ("fs");
var request = require ("request");

var folderpath = "webfiles/";
var urlScriptingTemplate = "http://1999.io/testing/monthlyarchives/template.html";
var maxPageItems = 35;
var templateText;

function getTemplateText (callback) {
	request (urlScriptingTemplate, function (err, response, templatetext) {
		if (!err && response.statusCode == 200) {
			callback (templatetext);
			}
		else {
			console.log ("getTemplateText: err.message == " + err.message);
			callback (undefined);
			}
		});
	}
function renderMonthlyArchivePage (theLog, callback) {
	function getPostTitle (item) {
		var theTitle = "";
		if ((item.payload !== undefined) && (item.payload.title !== undefined)) {
			return (item.payload.title);
			}
		return (theTitle);
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
	function isItemPublished (item) {
		if ((item.payload !== undefined) && (item.payload.flPublished !== undefined)) {
			return (item.payload.flPublished);
			}
		return (false);
		}
	function formatDateTime (d) {
		d = new Date (d);
		return (dateFormat (d, "m/d/yyyy; h:MM TT"));
		}
	if (theLog !== undefined) {
		var htmltext = "", indentlevel = 0, whenstart = new Date (), ctItems = 0, theMonth = undefined;
		function add (s) {
			htmltext +=  utils.filledString ("\t", indentlevel) + s + "\n";
			}
		add ("<div class=\"divBlogPostList\">"); indentlevel++;
		for (var i = theLog.chatLog.length - 1; i >= 0; i--) {
			if (ctItems >= maxPageItems) {
				break;
				}
			var item = theLog.chatLog [i];
			if (theMonth === undefined) {
				theMonth = new Date (item.when);
				}
			if (isItemPublished (item)) {
				var urlRendering = getUrlRendering (item);
				add ("<div class=\"divBlogPost\">"); indentlevel++;
				add ("<div class=\"divBlogPostTitle\"><a href=\"" + urlRendering + "\">" + getPostTitle (item) + "</a></div>");
				add ("<div class=\"divBlogPostBody\">" + getImage (item) + item.text + "</div>");
				add ("<div class=\"divBlogPostWhen\"><a href=\"" + urlRendering + "\">" + formatDateTime (item.when) + "</a></div>");
				add ("</div>\n\n"); indentlevel--;
				ctItems++;
				}
			}
		add ("</div>"); indentlevel--;
		var pagetable = {
			title: "Archive page for " + dateFormat (theMonth, "mmmm yyyy"),
			bodytext: htmltext,
			whenlastupdate: dateFormat (whenstart, "dddd, mmmm dS, yyyy; h:MM TT")
			};
		var pagetext = utils.multipleReplaceAll (templateText, pagetable, false, "[%", "%]");
		return (pagetext);
		}
	}
function processFile (f) {
	fs.readFile (f, function (err, data) {
		if (err) {
			console.log ("processFile: f == " + f + ", err.message == " + err.message);
			}
		else {
			var jstruct = JSON.parse (data.toString ());
			var theLog = {
				chatLog: jstruct
				};
			pagetext = renderMonthlyArchivePage (theLog);
			var fhtml = utils.stringPopExtension (f) + ".html";
			console.log ("processFile: fhtml == " + fhtml + ", pagetext.length == " + pagetext.length);
			fs.writeFile (fhtml, pagetext);
			}
		});
	
	}
function buildArchive (callback) {
	getTemplateText (function (s) {
		if (s !== undefined) {
			templateText = s; //copy into global
			filesystem.recursivelyVisitFiles (folderpath, function (f) {
				if (f === undefined) {
					callback ();
					}
				else {
					if (utils.endsWith (f, ".json")) {
						processFile (f);
						}
					}
				});
			}
		});
	}

buildArchive (function () {
	});
