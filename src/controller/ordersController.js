const { Orders, Users } = require('../models');

const ordersController = {

  async  getAllOrders(req, res) {
    try {
      const orders = await Orders.findAll({
        include: [{ model: Users, attributes: ['user_name'] }]
      });
      res.status(200).json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao buscar ordens.' });
    }
  },

  async  createOrder(req, res) {
    const { order_total, user_id } = req.body;
    try {
      const newOrder = await Orders.create({
        order_total,
        tb_users_user_id: user_id
      });
      res.status(201).json(newOrder);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erro ao criar nova ordem.' });
    }
  }
};

module.exports = ordersController;
