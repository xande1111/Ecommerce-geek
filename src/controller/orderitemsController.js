const db = require("../database");
const Orders = require("./orders");
const Products = require("./products");


const OrderItemsController = {

  async  createOrderItem(orderItemData) {
    const orderItem = await OrderItems.create(orderItemData);
    return orderItem;
  },

  async  getOrderItemById(itemId) {
    const orderItem = await OrderItems.findByPk(itemId);
    return orderItem;
  },

  async  updateOrderItem(itemId, updatedData) {
    const orderItem = await getOrderItemById(itemId);
    if (!orderItem) {
      throw new Error("Order item not found");
    }
    const updatedOrderItem = await orderItem.update(updatedData);
    return updatedOrderItem;
  },

  async  deleteOrderItem(itemId) {
    const orderItem = await getOrderItemById(itemId);
    if (!orderItem) {
      throw new Error("Order item not found");
    }
    await orderItem.destroy();
  }
  };

module.exports = OrderItemsController;
