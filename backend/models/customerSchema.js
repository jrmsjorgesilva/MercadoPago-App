const mongoose = require("mongoose");

const Customer = mongoose.model("Customer", {
  first_name: String,
  last_name: String,
  phone: {
    area_code: Number,
    phone_number: Number,
  },
  identification: {
    // explicitar o type evita conflito interno no mongoDB
    type: {type: String},
    identification_number: Number,
  },
  default_address: String,
  address: {
    id: Number,
    zip_code: Number,
    street_name: String,
    street_number: Number,
  },
  date_registered: {
    type: Date,
    default: Date.now,
  },
  description: String,
  default_card: String,
});

module.exports = Customer;
