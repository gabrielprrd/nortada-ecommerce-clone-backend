const routes = require('express').Router();

routes.get('/', (request, response) => response.send('Hello World'));

module.exports = routes;
