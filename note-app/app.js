//import fs module
const fs = require("fs");
const validator = require("validator");

//append txt to notes.txt
fs.appendFileSync("notes.txt", "hello node js");

//import js module
const util = require("./utils.js");
const notes = require("./notes.js");
const chalk = require("chalk");

//util.js
console.log("util module", util.name);
console.log("util module", util.printFunction());
console.log("util module", util.add(1, 2));

//notesjs
console.log("notes module", notes.getNotes());

console.log("email is", validator.isEmail("abcd@gmail.com"));
console.log("url is", validator.isURL("www.google.com"));

//challenge for npm module of chalk
/*
1.install npm module of chalk
2.load chalk into app.js
3.use it to print the string "success!" to the console in green
4. test your work
*/
console.log(chalk.red.bold("success!"));
