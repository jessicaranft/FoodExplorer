const { Router } = require('express');

const OrdersController = require('../controllers/OrdersController');
const ensureAuthenticated = require('../middlewares/ensureAuthenticated');

const ordersRoutes = Router();

const ordersController = new OrdersController();

ordersRoutes.use(ensureAuthenticated);

ordersRoutes.put("/:user_id", ordersController.updatePayment);
ordersRoutes.patch("/:user_id", ordersController.updateStatus);

module.exports = ordersRoutes;