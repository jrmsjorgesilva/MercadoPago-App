const Payment = require("../../models/paymentSchema");

const createPayment = async (req, res) => {
  // destructuring
  const {
    id,
    date_created,
    date_approved,
    date_last_updated,
    money_release_date,
    issuer_id,
    payment_method_id,
    payment_type_id,
    status,
    status_detail,
    currency_id,
    description,
    taxes_amount,
    shipping_amount,
    collector_id,
    payer: {
      payer_id,
      payer_email,
      identification: { identification_number, identification_type },
      payer_type,
    },
    metadata: {},
    additional_info: {
      items: [
        {
          items_id,
          items_title,
          items_description,
          items_picture_url,
          items_category_id,
          items_quantity,
          items_unit_price,
        },
      ],
      payer: { registration_date },
      shipments: {
        receiver_address: {
          street_name,
          stree,
          zip_code,
          city_name,
          state_name,
        },
      },
    },
    external_reference,
    transaction_amount,
    transaction_amount_refunded,
    coupon_amount,
    transaction_details: {
      net_received_amount,
      total_paid_amount,
      overpaid_amount,
      installment_amount,
    },
    fee_details: [{ fee_type, fee_amount, fee_payer }],
    statement_descriptor,
    installments,
    card: {
      first_six_digits,
      last_four_digits,
      expiration_month,
      expiration_year,
      card_date_created,
      card_date_last_updated,
      cardholder: {
        cardholder_name,
        identification: { cardholder_number, cardholder_type },
      },
    },
    notification_url,
    processing_mode,
    point_of_interaction: {
      pi_type,
      pi_application_data: { pi_app_name, pi_app_version },
      transaction_data: { qr_code_base64, qr_code, ticket_url },
    },
  } = req.body;

  const paymentToPost = {
    id,
    date_created,
    date_approved,
    date_last_updated,
    money_release_date,
    issuer_id,
    payment_method_id,
    payment_type_id,
    status,
    status_detail,
    currency_id,
    description,
    taxes_amount,
    shipping_amount,
    collector_id,
    payer: {
      payer_id,
      payer_email,
      identification: { identification_number, identification_type },
      payer_type,
    },
    metadata: {},
    additional_info: {
      items: [
        {
          items_id,
          items_title,
          items_description,
          items_picture_url,
          items_category_id,
          items_quantity,
          items_unit_price,
        },
      ],
      payer: { registration_date },
      shipments: {
        receiver_address: {
          street_name,
          stree,
          zip_code,
          city_name,
          state_name,
        },
      },
    },
    external_reference,
    transaction_amount,
    transaction_amount_refunded,
    coupon_amount,
    transaction_details: {
      net_received_amount,
      total_paid_amount,
      overpaid_amount,
      installment_amount,
    },
    fee_details: [{ fee_type, fee_amount, fee_payer }],
    statement_descriptor,
    installments,
    card: {
      first_six_digits,
      last_four_digits,
      expiration_month,
      expiration_year,
      card_date_created,
      card_date_last_updated,
      cardholder: {
        cardholder_name,
        identification: { cardholder_number, cardholder_type },
      },
    },
    notification_url,
    processing_mode,
    point_of_interaction: {
      pi_type,
      pi_application_data: { pi_app_name, pi_app_version },
      transaction_data: { qr_code_base64, qr_code, ticket_url },
    },
  };

  try {
    const postedPayment = await Payment.create(paymentToPost);
    return res.status(201).json({
      ...postedPayment,
      message: `O pagamento foi inserido com sucesso`,
    });
  } catch (error) {
    return res.status(422).json({
      message: `Não foi possível realizar a inserção de dados no banco`,
      error: error.message,
    });
  }
};

module.exports = createPayment;
