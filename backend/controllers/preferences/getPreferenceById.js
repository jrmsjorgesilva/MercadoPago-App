const Preference = require("../../models/preferenceSchema");

const getPreferenceById = async (req, res) => {
  const preferenceId = req.params.id;
  try {
    const preferenceReturned = await Preference.findOne({ _id: preferenceId });
    return res
      .status(200)
      .json({
        ...preferenceReturned,
        message: `A preferência correspondente ao id ${preferenceId} foi encontrada com sucesso`,
      });
  } catch (error) {
    return res.status(404).json({
      message: `Não foi possível encontrar o id ${preferenceId}`,
      error: error.message,
    });
  }
};

module.exports = getPreferenceById;
