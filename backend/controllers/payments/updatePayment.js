const Payment = require("../../models/paymentSchema");

const updatePayment = async (req, res) => {
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

  const paymentToUpdate = {
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

  const paymentId = req.params.id;

  try {
    const updatedPayment = await Payment.updateOne(
      { _id: paymentId },
      paymentToUpdate
    );
    return res
      .status(201)
      .json({
        ...paymentToUpdate,
        message: `O pagamento com id numero ${paymentId} foi atualizado com sucesso`,
      });
  } catch (error) {
    return res.status(422).json({
      message: `Não foi possível atualizar o pagamento com id numero ${paymentId} `,
      error: error.message,
    });
  }
};

module.exports = updatePayment;
