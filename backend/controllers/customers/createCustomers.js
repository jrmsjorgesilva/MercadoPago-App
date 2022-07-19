const Customer = require("../../models/customerSchema");

async function createCustomer(req, res) {
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
    const customerPosted = await Customer.create(customerToPost);
    return res.status(201).json(customerPosted);
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
}

module.exports = createCustomer;
