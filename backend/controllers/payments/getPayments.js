const Payment = require("../../models/paymentSchema");

const getPayments = async (req, res) => {
  try {
    const paymentsReturned = await Payment.find();
    return res
      .status(200)
      .json({ ...paymentsReturned, message: `Dados retonados com sucesso` });
  } catch (error) {
    return res.status(404).json({
      message: `Não foi possível retornar os dados solicitados`,
      error: error.message,
    });
  }
};

module.exports = getPayments;
