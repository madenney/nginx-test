

const express = require('express');
const app = express();
const port = 3000

app.use('/', express.static('.', {
  index: "index.html"
}))

// const server = http.createServer( ( req, res ) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

app.listen( port, () => {
  console.log(`Server running at http://${port}`)
});