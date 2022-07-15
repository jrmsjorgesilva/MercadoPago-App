const User = require("../../models/userSchema");

async function updateUser(req, res) {
  const {
    first_name,
    last_name,
    phone: { area_code, phone_number },
    identification: { type, identification_number },
    default_address,
    address: { id, zip_code, street_name, street_number },
    date_registered,
    description,
    default_card,
  } = req.body;

  const userToBeUpdated = {
    first_name,
    last_name,
    phone: { area_code, phone_number },
    identification: { type, identification_number },
    default_address,
    address: { id, zip_code, street_name, street_number },
    date_registered,
    description,
    default_card,
  };

  const UserId = req.params.id;

  try {
    const userUpdated = await User.updateOne({ _id: UserId }, userToBeUpdated);
    return res.status(201).json(userToBeUpdated);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

module.exports = updateUser;
