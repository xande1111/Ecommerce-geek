const express = require("express");

const requestLog = require("../middlewares/requestLog");

const productsController = require("../controllers/productsController");
const categoriesController = require("../controllers/categoriesController");
const orderitemsController = require("../controllers/orderitemsController");
const ordersController = require("../controllers/ordersController");
const usersController = require('../controllers/usersController');

const auth = require('../middlewares/auth');
const authController = require('../controller/authController');
const usersCreateValidation = require('../validations/users/create');
const authLoginValidation = require('../validations/auth/login');
const adminMiddleware = require('../middlewares/adminMiddleware');
const authAdmin = require('../middlewares/authMiddleware');


const routes = express.Router();

routes.get("/", (req, res)=> {
    res.send("Bem vindo à nossa loja");
});

routes.post("/login", authLoginValidation, authController.login);

routes.get("/order-items/:id", orderitemsController.getOrderItemById);
routes.post("/order-items", orderitemsController.createOrderItem);
routes.put("/order-items", orderitemsController.updateOrderItem);
routes.delete("order-items", orderitemsController.deleteOrderItem);

routes.get("users", usersController.getUsers);
routes.get("users/:id", usersController.getUserById);
routes.post("users", usersController.createUser);
routes.post("users/admin", adminMiddleware, usersCreateValidation, usersController.createUserAdmin);
routes.put("users", usersController.updateUser);
routes.delete("users", usersController.deleteUser);

routes.get("orders", ordersController.getAllOrders);
routes.post("orders", ordersController.createOrder);

routes.get("categories", categoriesController.getCategories);
routes.get("categories/:id", categoriesController.getCategoriesById);
routes.post("categories", adminMiddleware, categoriesController.createCategories);
routes.put("categories", adminMiddleware, categoriesController.updateCategories);
routes.delete("categories", adminMiddleware, categoriesController.deleteCategories);

routes.get("products", productsController.getProducts);
routes.get("products/:id", productsController.getProductById);
routes.post("products", adminMiddleware, productsController.createProduct);
routes.put("products", adminMiddleware, productsController.updateProduct);
routes.delete("products", adminMiddleware, productsController.deleteProduct);

module.exports = routes; 
