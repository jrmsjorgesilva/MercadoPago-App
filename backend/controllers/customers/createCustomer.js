require("dotenv").config();
const Customer = require("../../models/customerSchema");
const mercadopago = require("mercadopago");

async function createCustomer(req, res) {
  // configura mercadopago
  await mercadopago.configure({
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN,
  });

  // cria objeto
  const {
    first_name,
    last_name,
    phone: { area_code, phone_number },
    identification: { type, identification_number },
    default_address,
    address: { id, zip_code, street_name, street_number },
    date_registered,
    description,
    default_card,
  } = req.body;
  const customerToPost = {
    first_name,
    last_name,
    phone: { area_code, phone_number },
    identification: { type, identification_number },
    default_address,
    address: { id, zip_code, street_name, street_number },
    date_registered,
    description,
    default_card,
  };

  try {
    // manda o cliente para API mercadopago
    await mercadopago.customers.create({ customerToPost });
    // guarda no banco resposta mercadopago
    const customerPosted = await Customer.create(customerToPost);
    return res.status(201).json(customerPosted);
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
}

module.exports = createCustomer;
