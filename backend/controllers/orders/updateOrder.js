const Order = require("../../models/orderSchema");

const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const {
    external_reference,
    preference_id,
    payer: { payer_id, nickname },
    site_id,
    items: [
      {
        items_id,
        category_id,
        currency_id,
        description,
        picture_url,
        quantity,
        unit_price,
        title,
      },
    ],
    application_id: Number,
  } = req.body;
  const orderToUpdate = {
    external_reference,
    preference_id,
    payer: { payer_id, nickname },
    site_id,
    items: [
      {
        items_id,
        category_id,
        currency_id,
        description,
        picture_url,
        quantity,
        unit_price,
        title,
      },
    ],
    application_id: Number,
  };

  try {
    await Order.updateOne({ _id: orderId }, orderToUpdate);
    return res.status(200).json(orderToUpdate);
  } catch (error) {
    return res.status(422).json({
      message: `Não foi possível atualizar os dados no banco de dados para o pedido ${orderId}`,
      error: error.message,
    });
  }
};

module.exports = updateOrder;
