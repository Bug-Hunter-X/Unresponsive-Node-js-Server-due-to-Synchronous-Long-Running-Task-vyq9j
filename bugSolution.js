const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task asynchronously
  let count = 0;
  function processChunk() {
    const chunkSize = 1000000;
    const end = Math.min(count + chunkSize, 1000000000);
    for (let i = count; i < end; i++) {
      count++;
    }
    if (count < 1000000000) {
      setImmediate(processChunk);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World');
    }
  }
  processChunk();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});