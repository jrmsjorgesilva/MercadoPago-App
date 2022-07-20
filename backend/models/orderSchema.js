const mongoose = require("mongoose");

const Order = mongoose.model("Order", {
  external_reference: String,
  preference_id: String,
  payer: {
    payer_id: Number,
    nickname: String,
  },
  site_id: String,
  items: [
    {
      items_id: String,
      category_id: String,
      currency_id: String,
      description: String,
      picture_url: String,
      quantity: Number,
      unit_price: Number,
      title: String,
    },
  ],
  application_id: Number,
});

module.exports = Order;
