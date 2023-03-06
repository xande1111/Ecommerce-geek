const db = require("../database");
const { DataTypes } = require('sequelize');

const Products = db.define("Products", {
    produc_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    product_name: {
        type: DataTypes.STRING,
    },
    product_photo: {
        type: DataTypes.BLOB,
    }, 
    product_description: {
        type: DataTypes.STRING,
    },
    user_type: {
        type: DataTypes.STRING,
    },
    tb_categories_cat_id: {
        type: DataTypes.INTEGER, 
        references: {
            model: Categories, 
            key: "cat_id",
        }
    }
}, {
   tableName: "tb_products", 
});

module.exports = Products;