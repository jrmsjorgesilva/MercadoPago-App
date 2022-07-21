const mongoose = require("mongoose");

const Payment = mongoose.model("Payment", {
  id: Number,
  date_created: String,
  date_approved: String,
  date_last_updated: String,
  money_release_date: String,
  issuer_id: Number,
  payment_method_id: String,
  payment_type_id: String,
  status: String,
  status_detail: String,
  currency_id: String,
  description: String,
  taxes_amount: Number,
  shipping_amount: Number,
  collector_id: Number,
  payer: {
    payer_id: Number,
    payer_email: String,
    identification: {
      identification_number: Number,
      identification_type: String,
    },
    payer_type: String,
  },
  metadata: {},
  additional_info: {
    items: [
      {
        items_id: String,
        items_title: String,
        items_description: String,
        items_picture_url: String,
        items_category_id: String,
        items_quantity: Number,
        items_unit_price: Number,
      },
    ],
    payer: {
      registration_date: String,
    },
    shipments: {
      receiver_address: {
        street_name: String,
        street_number: Number,
        zip_code: Number,
        city_name: String,
        state_name: String,
      },
    },
  },
  external_reference: String,
  transaction_amount: Number,
  transaction_amount_refunded: Number,
  coupon_amount: Number,
  transaction_details: {
    net_received_amount: Number,
    total_paid_amount: Number,
    overpaid_amount: Number,
    installment_amount: Number,
  },
  fee_details: [
    {
      fee_type: String,
      fee_amount: Number,
      fee_payer: String,
    },
  ],
  statement_descriptor: String,
  installments: Number,
  card: {
    first_six_digits: Number,
    last_four_digits: Number,
    expiration_month: Number,
    expiration_year: Number,
    card_date_created: String,
    card_date_last_updated: String,
    cardholder: {
      cardholder_name: String,
      identification: {
        cardholder_number: Number,
        cardholder_type: String,
      },
    },
  },
  notification_url: String,
  processing_mode: String,
  point_of_interaction: {
    pi_type: String,
    pi_application_data: {
      pi_app_name: String,
      pi_app_version: String,
    },
    transaction_data: {
      qr_code_base64: String,
      qr_code: String,
      ticket_url: String,
    },
  },
});

module.exports = Payment;
