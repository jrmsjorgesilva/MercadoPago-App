const mongoose = require("mongoose");

const User = mongoose.model("User", {
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone: {
    area_code: Number,
    number: Number,
  },
  identification: {
    type: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
  default_address: {
    type: String,
    required: true,
  },
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

module.exports = User;