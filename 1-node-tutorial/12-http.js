const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end('Home');
      break;
    case '/about':
      res.end('About');
      break;
    default:
      res.end('Oops!');
      break;
  }
  //   if (req.url === '/') {
  //     res.end('Home');
  //   } else if (req.url === '/about') {
  //     res.end('About');
  //   } else {
  //     res.end('Oops!');
  //   }
});

server.listen(5000);
