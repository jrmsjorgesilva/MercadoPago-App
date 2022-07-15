const User = require("../../models/userSchema");

async function getUserById(req, res) {
  const id = req.params.id;
  try {
    const userFoundById = await User.findOne({ _id: id });
    return res.status(200).json(userFoundById);
  } catch (error) {
    return res
      .status(404)
      .json({ message: `Não foi possível encontrar o id ${id} no banco` });
  }
}

module.exports = getUserById;
