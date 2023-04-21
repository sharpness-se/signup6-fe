import express, { Express } from 'express';
import * as path from 'path';

const server: Express = express();

const STATIC_PATH = path.join(__dirname, '../dist/signup6-fe');
const INDEX_PATH = path.join(__dirname, '../dist/signup6-fe/index.html');
const port = process.env['PORT'] || 8080;

server.use(express.static(STATIC_PATH));
server.get('/*', function (req, res) {
  res.sendFile(INDEX_PATH);
});

server.listen(port);
console.log('Server listening on port ', port);
