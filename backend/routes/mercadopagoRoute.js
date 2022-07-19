require("dotenv").config();
const router = require("express").Router();
const mercadopago = require("mercadopago");

router.get("/", async (req, res) => {
  await mercadopago.configure({
    access_token: process.env.MERCADO_PAGO_ACCESS_TOKEN,
  });
  const newCustomer = await mercadopago.customers.create({
    first_name: 'Ronaldo'
  })
  console.log('pay', newCustomer);
  res.send(newCustomer);
});

module.exports = router;

// customers: {
//     schema: { additionalProperties: true, properties: [Object] },
//     cards: {
//       all: [Function (anonymous)],
//       create: [Function (anonymous)],
//       save: [Function (anonymous)],
//       update: [Function (anonymous)],
//       get: [Function (anonymous)],
//       findById: [Function (anonymous)],
//       delete: [Function (anonymous)]
//     },
//     search: [Function (anonymous)],
//     create: [Function (anonymous)],
//     save: [Function (anonymous)],
//     update: [Function (anonymous)],
//     get: [Function (anonymous)],
//     findById: [Function (anonymous)],
//     remove: [Function (anonymous)]
//   },