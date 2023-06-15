const knex = require('../database/knex');

class OrdersController {
  async update (user_id) {
    const order = await knex("orders_items")
      .select(knex.raw("SUM(quantity) AS total_items, SUM(item_total_price) AS total_price"))
      .where({ user_id })
      .groupBy("user_id")
      .first();

    await knex("orders")
      .update({
        total_items: order.total_items || 0,
        total_price: order.total_price || 0
      })
      .where({ user_id });
  }

  async updatePayment (req, res) {
    const { user_id } = req.params;
    const { payment_method } = req.body;

    await knex("orders").update({ payment_method }).where({ user_id });

    return res.json();
  }

  async updateStatus (req, res) {
    const { user_id } = req.params;
    const { status } = req.body;

    await knex("orders").update({ status }).where({ user_id });

    return res.json();
  }
}

module.exports = OrdersController;