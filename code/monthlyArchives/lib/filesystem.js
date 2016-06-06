exports.deleteDirectory = fsDeleteDirectory;
exports.sureFilePath = fsSureFilePath;
exports.newObject = fsNewObject;
exports.getObject = fsGetObject;
exports.recursivelyVisitFiles = fsRecursivelyVisitFiles;

var fs = require ("fs");

var fsStats = {
	ctWrites: 0,
	ctBytesWritten: 0,
	ctWriteErrors: 0,
	ctReads: 0,
	ctBytesRead: 0,
	ctReadErrors: 0
	};



function fsSureFilePath (path, callback) { 
	var splits = path.split ("/");
	path = ""; //1/8/15 by DW
	if (splits.length > 0) {
		function doLevel (levelnum) {
			if (levelnum < (splits.length - 1)) {
				path += splits [levelnum] + "/";
				fs.exists (path, function (flExists) {
					if (flExists) {
						doLevel (levelnum + 1);
						}
					else {
						fs.mkdir (path, undefined, function () {
							doLevel (levelnum + 1);
							});
						}
					});
				}
			else {
				if (callback != undefined) {
					callback ();
					}
				}
			}
		doLevel (0);
		}
	else {
		if (callback != undefined) {
			callback ();
			}
		}
	}
function fsNewObject (path, data, type, acl, callback, metadata) {
	fsSureFilePath (path, function () {
		fs.writeFile (path, data, function (err) {
			var dataAboutWrite = {
				};
			if (err) {
				console.log ("fsNewObject: error == " + JSON.stringify (err, undefined, 4));
				fsStats.ctWriteErrors++;
				if (callback != undefined) {
					callback (err, dataAboutWrite);
					}
				}
			else {
				fsStats.ctWrites++;
				fsStats.ctBytesWritten += data.length;
				if (callback != undefined) {
					callback (err, dataAboutWrite);
					}
				}
			}); 
		});
	}
function fsGetObject (path, callback) {
	fs.readFile (path, "utf8", function (err, data) {
		var dataAboutRead = {
			Body: data
			};
		if (err) {
			fsStats.ctReadErrors++;
			}
		else {
			fsStats.ctReads++;
			fsStats.ctBytesRead += dataAboutRead.Body.length;
			}
		callback (err, dataAboutRead);
		});
	}
function fsListObjects (path, callback) {
	function endsWithChar (s, chPossibleEndchar) {
		if ((s === undefined) || (s.length == 0)) { 
			return (false);
			}
		else {
			return (s [s.length - 1] == chPossibleEndchar);
			}
		}
	fs.readdir (path, function (err, list) {
		if (!endsWithChar (path, "/")) {
			path += "/";
			}
		if (list !== undefined) { //6/4/15 by DW
			for (var i = 0; i < list.length; i++) {
				var obj = {
					s3path: path + list [i],
					path: path + list [i], //11/21/14 by DW
					Size: 1
					};
				callback (obj);
				}
			}
		callback ({flLastObject: true});
		});
	}
function fsRecursivelyVisitFiles (folderpath, fileCallback, completionCallback) { //3/23/16 by DW
	if (folderpath [folderpath.length - 1] != "/") {
		folderpath += "/";
		}
	fs.readdir (folderpath, function (err, list) {
		function doListItem (ix) {
			if (ix < list.length) {
				var f = folderpath + list [ix];
				fs.stat (f, function (err, stats) {
					if (err) {
						doListItem (ix + 1);
						}
					else {
						if (stats.isDirectory ()) { //dive into the directory
							fsRecursivelyVisitFiles (f, fileCallback, function () {
								doListItem (ix + 1);
								});
							}
						else {
							if (fileCallback !== undefined) {
								fileCallback (f);
								doListItem (ix + 1);
								}
							}
						}
					});
				}
			else {
				if (completionCallback !== undefined) {
					completionCallback ();
					}
				else {
					if (fileCallback !== undefined) {
						fileCallback (undefined);
						}
					}
				}
			}
		if (list !== undefined) { //6/4/15 by DW
			doListItem (0);
			}
		});
	}
function fsDeleteDirectory (folderpath, callback) { //3/25/16 by DW
	if (folderpath [folderpath.length - 1] != "/") {
		folderpath += "/";
		}
	fs.readdir (folderpath, function (err, list) {
		if (err) {
			console.log ("fsDeleteDirectory: err.message == " + err.message);
			}
		else {
			function doListItem (ix) {
				if (ix < list.length) {
					var f = folderpath + list [ix];
					fs.stat (f, function (err, stats) {
						if (err) {
							doListItem (ix + 1);
							}
						else {
							if (stats.isDirectory ()) { //dive into the directory
								fsDeleteDirectory (f, function () {
									doListItem (ix + 1);
									});
								}
							else {
								fs.unlink (f, function () {
									doListItem (ix + 1);
									});
								}
							}
						});
					}
				else {
					fs.rmdir (folderpath, function () {
						if (callback !== undefined) {
							callback ();
							}
						});
					}
				}
			doListItem (0);
			}
		});
	}
 
