const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongooseConnect = require("./database/mongo");
const PORT = process.env.PORT || 8000;
const bodyParser = require("body-parser");
// routes
const usersRoutes = require("./routes/usersRoute");
const customersRoute = require("./routes/customersRoute");
const mercadopagoRoute = require("./routes/mercadopagoRoute");
const ordersRoute = require("./routes/ordersRoute");
const paymentsRoute = require("./routes/paymentsRoute");
const preferencesRoute = require("./routes/preferencesRoute");
const notFoundRoute = require("./routes/notFoundRoute");

// express
const server = express();

// server utils
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.use(express.json());

// routes
// Rotas para usuarios autenticados da documentação mercado pago
server.use("/users", usersRoutes);
// API de clientes da documentação mercado pago
server.use("/customers", customersRoute);
// API de criação de pedido da documentação mercado pago
server.use("/orders", ordersRoute);
// API de pagamentos da documentação mercado pago
server.use("/payments", paymentsRoute);
// API de preferencias da documentação mercado pago
server.use("/preferences", preferencesRoute);
// Mercado pago
server.use("/mercadopago", mercadopagoRoute);
server.use("*", notFoundRoute);

// database connect
mongooseConnect(server);

// server listening
server.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
