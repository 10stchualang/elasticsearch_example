const express = require('express');
const next = require('next');
const { client, initSearchIndex } = require('./elasticsearch');
const { json } = require('body-parser');

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const port = 1337;

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  initSearchIndex();

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
