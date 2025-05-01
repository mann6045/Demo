// Require the given module

const fs = require("fs");

// use readFileSync() method
// store the result (return value) of this
// Method in a variable named readme

const readMe = fs.readFileSync("readMe.txt", "utf-8");
console.log("Done reading file: " + readMe);

// Store the content and read from
// readMe.txt to a file WriteMe.txt

fs.writeFileSync("writeMe.txt", "This is new content to be written into a file !!!");
console.log("Done writing into a File");