const express = require('express');

const UserController = require('./controllers/UserController');
const SaleController = require('./controllers/SaleController');

const routes = express.Router();

routes.post('/user', UserController.create);

routes.post('/sale', SaleController.create);

module.exports = routes;