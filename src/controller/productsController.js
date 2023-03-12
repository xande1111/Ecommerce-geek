const db = require("../database");
const Products = require("../models/products");
const Categories = require("../models/categories");

const productsController = {

    async createProduct(req, res){
    try {
    const newProduct = await Products.create({
    product_name: req.body.product_name,
    product_photo: req.body.product_photo,
    product_description: req.body.product_description,
    user_type: req.body.user_type,
    tb_categories_cat_id: req.body.tb_categories_cat_id,
    });
    res.status(201).json(newProduct);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    },

   
    async getProducts(req, res) {
    try {
    const products = await Products.findAll({
    include: Categories,
    });
    res.status(200).json(products);
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    },


    async getProductById(req, res){
    try {
    const product = await Products.findByPk(req.params.id, {
    include: Categories,
    });
    if (product === null) {
    res.status(404).json({ message: "Produto não encontrado" });
    } else {
    res.status(200).json(product);
    }
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    },


    async updateProduct(req, res){
    try {
    const product = await Products.findByPk(req.params.id);
    if (product === null) {
    res.status(404).json({ message: "Produto não encontrado" });
    } else {
    const updatedProduct = await product.update({
    product_name: req.body.product_name,
    product_photo: req.body.product_photo,
    product_description: req.body.product_description,
    user_type: req.body.user_type,
    tb_categories_cat_id: req.body.tb_categories_cat_id,
    });
    res.status(200).json(updatedProduct);
    }
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    },


    async deleteProduct(req, res){
    try {
    const product = await Products.findByPk(req.params.id);
    if (product === null) {
    res.status(404).json({ message: "Produto não encontrado" });
    } else {
    await product.destroy();
    res.status(204).json();
    }
    } catch (err) {
    res.status(500).json({ message: err.message });
    }
    }
};

module.exports = productsController;
