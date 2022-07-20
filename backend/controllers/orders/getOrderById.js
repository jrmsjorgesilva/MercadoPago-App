const Order = require("../../models/orderSchema");

const getOrderById = async (req, res) => {
  const orderId = req.params.id;
  try {
    const orderReturned = await Order.findOne({ _id: orderId });
    return res.status(200).json(orderReturned);
  } catch (error) {
    return res.status(422).json({
      message: `Não foi possível encontrar pelo ID ${orderId}`,
      error: error.message,
    });
  }
};

module.exports = getOrderById;
