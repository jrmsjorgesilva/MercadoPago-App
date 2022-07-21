const Preference = require("../../models/preferenceSchema");

const getPreferences = async (req, res) => {
  // todo
  try {
    const preferenceReturned = await Preference.find();
    return res.status(200).json(preferenceReturned);
  } catch (error) {
    res.status(404).json({
      message: `Não foi possível encontrar os dados soliticados no banco`,
      error: error.message,
    });
  }
};

module.exports = getPreferences;
