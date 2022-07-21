const Order = require("../../models/orderSchema");

const createOrder = async (req, res) => {
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

  const orderToPost = {
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
    const postedOrder = await Order.create(orderToPost);
    return res.status(201).json(postedOrder);
  } catch (error) {
    return res.status(422).json({
      message: `The order was not posted on the database due to an error`,
      error: error.message,
    });
  }
};

module.exports = createOrder;
