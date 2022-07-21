const Payment = require("../../models/paymentSchema");

const getPaymentById = async (req, res) => {
  const paymentId = req.params.id;
  try {
    const paymentsReturned = await Payment.findOne({ _id: paymentId });
    return res
      .status(200)
      .json({
        ...paymentsReturned,
        message: `O pagamento correspondente ao id ${paymentId} foi encontrado com sucesso`,
      });
  } catch (error) {
    return res.status(404).json({
      message: `Não foi possível encontrar o pagamento correspondente ao id ${paymentId}`,
      error: error.message,
    });
  }
};

module.exports = getPaymentById;
