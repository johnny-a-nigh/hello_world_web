#!/usr/bin/env nodejs

const http = require('http');
const port = 8002;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, world from Node.js!\n');
}).listen(port, 'localhost');

console.log(`Server running at http://localhost:${port}/`);
