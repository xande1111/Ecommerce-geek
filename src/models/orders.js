const db = require("../database");
const { DataTypes } = require('sequelize');

const Orders = db.define("Orders", {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
    },
    order_total: {
        type: DataTypes.INTEGER,
    },
    created_at: {
        type: DataTypes.DATE,
    },
    updated_at: {
        type: DataTypes.DATE,
    },
    tb_users_user_id: {
        type: DataTypes.INTEGER, 
        references: {
            model: Users, 
            key: "user_id",
        }
    }
}, {
   tableName: "tb_orders", 
});

module.exports = Orders;

