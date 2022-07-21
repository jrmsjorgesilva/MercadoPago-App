const mongoose = require("mongoose");

const Preference = mongoose.model(
  "Preference",
  {
    items: [
      {
        title: String,
        description: String,
        picture_url: String,
        category_id: String,
        quantity: Number,
        currency_id: String,
        unit_price: Number,
      },
    ],
    payer: {
      phone: {
        area_code: Number,
        phone_number: Number,
      },
      identification: {
        identification_type: String,
        identification_number: Number,
      },
      address: {
        id: Number,
        zip_code: Number,
        street_name: String,
        street_number: Number,
      },
    },
    payment_methods: {
      excluded_payment_methods: [{}],
      excluded_payment_types: [{}],
    },
    shipments: {
      free_methods: [{}],
      receiver_address: {},
    },
    back_urls: {},
    differential_pricing: {},
    tracks: [
      {
        track_type: String,
      },
    ],
    metadata: {},
  }
);

module.exports = Preference;
