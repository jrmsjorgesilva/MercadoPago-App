const Customer = require("../../models/customerSchema");

async function getCustomers(req, res) {
  try {
    const returnedCustomers = await Customer.find();
    return res.status(200).json(returnedCustomers);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = getCustomers;
