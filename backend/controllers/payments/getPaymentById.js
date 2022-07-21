const Payment = require("../../models/paymentSchema");

const getPaymentById = async (req, res) => {
  const paymentId = req.params.id;
  try {
    const paymentsReturned = await Payment.findOne({ _id: paymentId });
    // returns json object - if paymentsReturned is null returns null but if it is an object returns the object and the success message
    return res.status(200).json(
      paymentsReturned && {
        ...paymentsReturned,
        message: `O pagamento correspondente ao id ${paymentId} foi encontrado com sucesso`,
      }
    );
  } catch (error) {
    return res.status(404).json({
      message: `Não foi possível encontrar o pagamento correspondente ao id ${paymentId}`,
      error: error.message,
    });
  }
};

module.exports = getPaymentById;
