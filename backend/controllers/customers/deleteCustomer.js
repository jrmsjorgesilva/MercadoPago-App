const Customer = require("../../models/customerSchema");

async function deleteCustomer(req, res) {
  const customerId = req.params.id;
  try {
    const customerDeleted = await Customer.deleteOne({ _id: customerId });
    return res.status(200).json(customerDeleted);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

module.exports = deleteCustomer;
