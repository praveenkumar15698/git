const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  // Serve index.html on root path
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading file');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  } else {
    // 404 for any other route
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
