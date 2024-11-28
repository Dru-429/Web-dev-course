// const { createServer } = require('node:http');
import http from "http"

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1> Hello WRLD Dru this side </h1>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//Common js ::     Default 
                // Load module syncronusly 
                // use requeire 
                // eg: const hostname = '127.0.0.1';

//EcmaScript Module ES6js ::    Not Default 
                // Load module asyncronusly 
                // "type" : "module"  in package.json 
                // don't have require fn this use import like react 
                // eg 

