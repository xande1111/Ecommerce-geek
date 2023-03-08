const express = require('express');

const routes = express.Router();

//Controllers
const productController = require('../controller/productsController');
const categoriesContrller = require('../controller/categoriesController');
const orderitemsController = require('../controller/orderitemsController');
const ordersController = require('../controller/ordersController');
const usersController = require('../controller/usersController');

//Login e Middlewares




module.exports = routes;
