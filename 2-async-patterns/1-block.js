const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.end(
        `
        <body style="margin: 0; font-family: Rubik">
        <H1 style="margin: 0; height: 100vh; line-height: 100vh; font-size: 2em; color:#0984e3; text-align:center;">Home Page</H1>
        </body>
        `
      );
      break;
    case '/about':
      // ~~~~ Block code ~~~~
      for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 1000; j++) {
          console.log(`${i} ${j}`);
        }
      }
      res.end(`
      <body style="margin: 0; font-family: Rubik">
      <H1 style="margin: 0; height: 100vh; line-height: 100vh; font-size: 2em; color:#0984e3; text-align:center;">About Page</H1>
      </body>
      `);
      break;
    default:
      res.end(`
      <body style="margin: 0; font-family: Rubik">
      <H1 style="margin: 0; height: 100vh; line-height: 100vh; font-size: 2em; color:#0984e3; text-align:center;">Oops! No Page you are looking for</H1>
      </body>
      `);
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

server.listen(5000, () => {
  console.log('Server Listening on port 5000...');
});
