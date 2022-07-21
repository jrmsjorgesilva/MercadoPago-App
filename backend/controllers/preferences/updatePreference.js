const Preference = require("../../models/preferenceSchema");

const updatePreference = async (req, res) => {
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

  const preferenceToUpdate = {
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

  const preferenceId = req.params.id;

  try {
    const preferenceUpdated = await Preference.updateOne(
      { _id: preferenceId },
      preferenceToUpdate
    );
    return res.status(201).json(preferenceUpdated);
  } catch (error) {
    return res.status(422).json({
      message: `Não foi possível atualizar os dados com a requisição`,
      error: error.message,
    });
  }
};

module.exports = updatePreference;
