const db = require("../database");
const { DataTypes } = require('sequelize');
const Orders = require("./orders");
const Products = require("./products");

const OrderItems = db.define("OrderItems", {
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    item_quantity: {
        type: DataTypes.INTEGER,
    },
    item_price: {
        type: DataTypes.FLOAT,
    }
}, {
   tableName: "tb_order_items", 
});

OrderItems.belongsTo(Orders);
OrderItems.belongsTo(Products);

module.exports = OrderItems;
