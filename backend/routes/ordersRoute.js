const router = require('express').Router();
// model
const Order = require('../models/orderSchema');
// controllers
const createOrder = require('../controllers/orders/createOrder');
const getOrders = require('../controllers/orders/getOrders');
const getOrderById = require('../controllers/orders/getOrderById');
const updateOrder = require('../controllers/orders/updateOrder');
const deleteOrder = require('../controllers/orders/deleteOrder');

// POST
router.post('/', createOrder);

// GET
router.get('/', getOrders);

// GET by ID
router.get('/:id', getOrderById);

// PATCH by ID
router.patch('/id', updateOrder);

// DELETE by ID
router.delete('/:id', deleteOrder);

module.exports = router;