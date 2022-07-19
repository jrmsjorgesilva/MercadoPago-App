const Customer = require("../../models/customerSchema");

const getCustomerById = async (req, res) => {
  const customerId = req.params.id;
  try {
    const returnedCustomer = await Customer.findOne({ _id: customerId });
    return res.status(200).json(returnedCustomer);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

module.exports = getCustomerById;
