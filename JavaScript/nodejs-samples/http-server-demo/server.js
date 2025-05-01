const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
    console.log("GET Request Successfull!");
    res.send("Get req Successfully initiated");
});

app.put("/put", (req, res) => {
    console.log("PUT REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send(`Data update Request Recieved`);
});

app.post("/post", (req, res) => {
    console.log("POST REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send(`Data post Request Recieved`);
});

app.delete("/delete", (req, res) => {
    console.log("DELETE REQUEST SUCCESSFUL");
    console.log(req.body);
    res.send(`Data delete Request Recieved`);
});

app.listen(PORT, () => {
    console.log(`Server established at ${PORT}`);
})