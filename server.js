'use strict';

const http = require('http');
const Router = require('vien-simple-router');

let router = new Router('/api');

// testing purposes only
// todo: move all methods into route definition under /route
router.get('/hello', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.write('{"msg": "hello world"}');
  res.end();
});

http.createServer(router.route()).listen(3000, () => console.log('server up'));