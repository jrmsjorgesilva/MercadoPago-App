const Payment = require("../../models/paymentSchema");

const deletePayment = async (req, res) => {
  const paymentId = req.params.id;

  try {
    const deletedPayment = await Payment.deleteOne({ _id: paymentId });
    return res
      .status(200)
      .json({
        ...deletedPayment,
        message: `O pagamento correspondente ao id numero ${paymentId} foi deletado com sucesso`,
      });
  } catch (error) {
    return res.status(404).json({
      message: `Não foi possível deletar o pagamento correspondente ao id numero ${paymentId}`,
      error: error.message,
    });
  }
};

module.exports = deletePayment;
