const User = require("../../models/userSchema");

async function createUser(req, res) {
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

  const userToBeCreated = {
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

  try {
    const userCreated = await User.create(userToBeCreated);
    return res.status(201).json(userCreated);
  } catch (error) {
    return res.status(422).json(error);
  }
}

module.exports = createUser;
