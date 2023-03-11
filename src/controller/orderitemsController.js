const db = require("../database");
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
  },
}, {
  tableName: "tb_order_items",
});

// assssociações entre modelos
OrderItems.belongsTo(Orders);
OrderItems.belongsTo(Products);

// funções de CRUD
async function createOrderItem(orderItemData) {
  const orderItem = await OrderItems.create(orderItemData);
  return orderItem;
}

async function getOrderItemById(itemId) {
  const orderItem = await OrderItems.findByPk(itemId);
  return orderItem;
}

async function updateOrderItem(itemId, updatedData) {
  const orderItem = await getOrderItemById(itemId);
  if (!orderItem) {
    throw new Error("Order item not found");
  }
  const updatedOrderItem = await orderItem.update(updatedData);
  return updatedOrderItem;
}

async function deleteOrderItem(itemId) {
  const orderItem = await getOrderItemById(itemId);
  if (!orderItem) {
    throw new Error("Order item not found");
  }
  await orderItem.destroy();
}

module.exports = {
  OrderItems,
  createOrderItem,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
};
