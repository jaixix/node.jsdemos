const http = require('http');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.end('Server is running in app2.js!');
});

server.listen(8081, () => {
    const {address, port} = server.address();
    console.log(`Server running on ${address}:${port}`);
});