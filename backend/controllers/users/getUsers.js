const User = require('../../models/userSchema');

async function getUsers (req, res) {
    try {
      const usersFound = await User.find();
      return res.status(200).json(usersFound);
    } catch (error) {
      return res
        .status(404)
        .json({ message: `Não foi possível encontrar os dados no banco` });
    }
  }

  module.exports = getUsers;