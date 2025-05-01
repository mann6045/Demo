const { promises } = require("dns")

setImmediate(() => {
    console.log("Set Immdediate is Called");
});

Promise.resolve("Promise is resolve").then(console.log);

setTimeout(() => {
    console.log("Time function is called");
}, 0);

process.nextTick(() => {
    console.log("Process.nextTick");
});