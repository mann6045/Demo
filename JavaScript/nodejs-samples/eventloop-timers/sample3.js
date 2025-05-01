// Pending Callbacks

console.log("Start");
setImmediate(() => {
    console.log("Immediate Callback"); // Immediate Callback Also take to time to execute
});

console.log("End");