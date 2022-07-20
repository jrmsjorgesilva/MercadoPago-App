const Order = require("../../models/orderSchema");

const getOrders = async (req, res) => {
  try {
    const ordersToReturn = await Order.find();
    return res.status(200).json(ordersToReturn);
  } catch (error) {
    return res.status(404).json({
      message: `Não foi possível encontrar o que vc buscava no banco de dados`,
      error: error.message,
    });
  }
};

module.exports = getOrders;
