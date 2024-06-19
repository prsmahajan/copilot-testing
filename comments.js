const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        // Handle comments request
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('This is the comments page.');
    } else {
        // Handle other requests
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, world!');
    }
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});