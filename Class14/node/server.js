const http = require("http");

const hostName = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(request);

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello from Qinshift Academy Group 1");
});

server.listen(port, hostName, () => {
  console.log(`Server is running at http://${hostName}:${port}`);
});
