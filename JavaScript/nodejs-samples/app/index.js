const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h2>Hello World</h2>");
});

const port = 8000;
const host = "localhost";

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});