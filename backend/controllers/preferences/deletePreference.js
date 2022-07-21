const Preference = require("../../models/preferenceSchema");

const deletePreference = async (req, res) => {
  const preferenceId = req.params.id;

  try {
    const preferenceDeleted = await Preference.deleteOne({ _id: preferenceId });
    return res
      .status(200)
      .json({
        ...preferenceDeleted,
        message: `A preferencia correspondente ao id ${preferenceId} foi deletada com sucesso`,
      });
  } catch (error) {
    return res.status(422).json({
      message: `Não foi possível deletar a preferencia correspondente ao id ${preferenceId} devido a uma falha`,
      error: error.message,
    });
  }
};

module.exports = deletePreference;
