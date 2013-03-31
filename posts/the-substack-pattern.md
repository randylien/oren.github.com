## The Substack Pattern - a module should only do one thing

db/index.js

```js
"use strict";
 
var fs = require("fs"),
path = require("path"),
files,
modules;
 
// INIT YOUR DATABASE STUFF
 
// Load all the other "db modules" in the current directory.
files = fs.readdirSync(__dirname);
files.forEach(function (file) {
var stats = fs.statSync(path.join(__dirname, file));
 
if (!stats.isDirectory() && path.extname(file) === ".js" && __filename.indexOf(file) === -1) {
file = file.replace(path.extname(file), "");
 
modules[file] = require('./' + file)(YOUR_DB_CONNECTION_OBJECT);
}
});
 
exports.get = function (type) {
return modules[type];
};
```js

dbstuff = require("./db")
var module1 = dbstuff.get("module1");
var module2 = dbstuff.get("module2");
