const express = require("express");
const axios = require("axios");
const cors = require("cors");
const mongooseConnect = require("./database/mongo");
const PORT = process.env.PORT || 8000;
// routes
const userRoutes = require("./routes/userRoutes");
const notFoundRoute = require("./routes/notFoundRoute");

// express
const server = express();

// server utils
server.use(cors());
server.use(express.json());

// routes
// API de clientes da documentação mercado pago
server.use("/users", userRoutes);
// API de criação de pedido da documentação mercado pago
server.use("/orders", userRoutes);
// API de pagamentos da documentação mercado pago
server.use("/payments", userRoutes);
// API de preferencias da documentação mercado pago
server.use("/preferences", userRoutes);
server.use("*", notFoundRoute);

// database connect
mongooseConnect(server);

// server listening
server.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
