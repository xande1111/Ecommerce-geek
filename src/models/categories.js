const db = require("../database");
const { DataTypes } = require('sequelize');

const Categories = db.define("Categories", {
    cat_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    cat_name: {
        type: DataTypes.STRING,
    },
    cat_description: {
        type: DataTypes.STRING,
    }
}, {
   tableName: "tb_categories", 
});

module.exports = Categories;
