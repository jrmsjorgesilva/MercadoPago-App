const Order = require("../../models/orderSchema");

const deleteOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    const deletedOrder = await Order.deleteOne({ _id: orderId });
    res
      .status(200)
      .json({
        ...deletedOrder,
        message: `O ID ${orderId} foi deletado com sucesso`,
      });
  } catch (error) {
    return res.status(404).json({
      message: `Não foi possível realizar a exclusão do ID ${orderId}`,
      error: error.message,
    });
  }
};

module.exports = deleteOrder;
