const db = require("../database");
const { DataTypes } = require('sequelize');

const Users = db.define("Users", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true, 
        unique: true,
    },
    user_name: {
        type: DataTypes.STRING,
    },
    user_email: {
        type: DataTypes.STRING,
    },
    user_password: {
        type: DataTypes.STRING,
    }, 
    user_type: {
        type: DataTypes.STRING,
    },
}, {
   tableName: "tb_users", 
});

module.exports = Users;
