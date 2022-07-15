const User = require("../../models/userSchema");

async function deleteUser(req, res) {
  const id = req.params.id;
  try {
    const userDeleted = await User.deleteOne({ _id: id });
    return res.status(404).json({
      ...userDeleted,
      message: `Usuario com id ${id} deletado da base de dados`,
    });
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
}

module.exports = deleteUser;
