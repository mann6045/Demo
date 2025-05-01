// Poll Phase
const fs = require("fs");
const readStream = fs.createReadStream('./file.txt');
console.log("Start");
readStream.on('data',(chunk) => {
    console.log(chunk.toString());
});
// Thare are some delay because for a file read 
// it will take time to read the data in the file 

console.log("End");