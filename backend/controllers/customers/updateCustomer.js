const Customer = require("../../models/customerSchema");

async function updateCustomer(req, res) {
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
  const customerToUpdate = {
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
  const customerId = req.params.id;

  try {
    await Customer.updateOne({ _id: customerId }, customerToUpdate);
    return res.status(201).json(customerToUpdate);
  } catch (error) {
    return res.status(422).json({ message: error.message });
  }
}

module.exports = updateCustomer;
