const Preference = require("../../models/preferenceSchema");

const createPreference = async (req, res) => {
  // destructuring
  const {
    items: [
      {
        title,
        description,
        picture_url,
        category_id,
        quantity,
        currency_id,
        unit_price,
      },
    ],
    payer: {
      phone: { area_code, phone_number },
      identification: { identification_type, identification_number },
      address: { id, zip_code, street_name, street_number },
    },
    payment_methods: {
      excluded_payment_methods: [{}],
      excluded_payment_types: [{}],
    },
    shipments: {
      free_methods: [{}],
      receiver_address: {},
    },
    back_urls: {},
    differential_pricing: {},
    tracks: [{ track_type }],
    metadata: {},
  } = req.body;

  const preferenceToPost = {
    items: [
      {
        title,
        description,
        picture_url,
        category_id,
        quantity,
        currency_id,
        unit_price,
      },
    ],
    payer: {
      phone: {
        area_code,
        phone_number,
      },
      identification: {
        identification_type,
        identification_number,
      },
      address: {
        id,
        zip_code,
        street_name,
        street_number,
      },
    },
    payment_methods: {
      excluded_payment_methods: [{}],
      excluded_payment_types: [{}],
    },
    shipments: {
      free_methods: [{}],
      receiver_address: {},
    },
    back_urls: {},
    differential_pricing: {},
    tracks: [
      {
        track_type,
      },
    ],
    metadata: {},
  };

  try {
    const preferencePosted = await Preference.create(preferenceToPost);
    return res
      .status(201)
      .json({
        ...preferencePosted,
        message: `A preferência foi criada com sucesso`,
      });
  } catch (error) {
    return res.status(422).json({
      message: `Não foi possível completar esta preferência no banco de dados`,
      error: error.message,
    });
  }
};

module.exports = createPreference;
