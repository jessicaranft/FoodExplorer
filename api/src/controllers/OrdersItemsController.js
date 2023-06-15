const knex = require('../database/knex');
const OrdersController = require('./OrdersController');

class OrdersItemsController {
  async create (req, res) {
    const { order_id, food_id, quantity } = req.body;
    const { user_id } = req.params;

    const { price } = await knex("food").select("price").where({ id: food_id }).first();

    const item_total_price = quantity * price;

    const orders_items = await knex("orders_items").insert({
      user_id,
      order_id,
      food_id,
      quantity,
      item_total_price
    });
    
    await knex("orders")
      .update({
        total_items: knex.raw("(SELECT SUM(quantity) FROM orders_items WHERE user_id = ?)", [user_id]),
        total_price: knex.raw("(SELECT SUM(item_total_price) FROM orders_items WHERE user_id = ?)", [user_id])
      })
      .where({ user_id });

      const ordersController = new OrdersController();
      await ordersController.update(user_id);

    return res.json(orders_items);
  }

  async index (req, res) {
    const { user_id } = req.query;

    const orders_items = await knex("orders_items")
      .select([
        "orders_items.id",
        "quantity",
        "item_total_price",
        "food.title",
        "food.image"
      ])
      .join("food", "orders_items.food_id", "food.id")
      .where("orders_items.user_id", user_id);

      return res.json(orders_items);
  }

  async delete (req, res) {
    const { user_id } = req.params;
    const { id } = req.body;

    await knex("orders_items").where({ user_id, id }).delete();

    await knex ("orders")
      .update({
        total_items: knex.raw("(SELECT SUM(quantity) FROM orders_items WHERE user_id = ?)", [user_id]),
        total_price: knex.raw("(SELECT SUM(item_total_price) FROM orders_items WHERE user_id = ?)", [user_id])
      })
      .where({ user_id });

    const ordersController = new OrdersController();
    await ordersController.update(user_id);

    return res.json();
  }
}

module.exports = OrdersItemsController;