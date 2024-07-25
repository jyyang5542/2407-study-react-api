const fs = require('fs');
const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const dataOne = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/assets/data/data_one.json')));
const dataTwo = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/assets/data/data_two.json')));

const router = jsonServer.router({
  data_one: dataOne,
  data_two: dataTwo,
});

server.use(middlewares);
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
