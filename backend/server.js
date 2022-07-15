const express = require("express");
const axios = require("axios")
const cors = require("cors");
const mongooseConnect = require('./database/mongo');
const PORT = process.env.PORT || 8000;
// routes
const userRoutes = require('./routes/userRoutes');

// express 
const server = express();

// server utils
server.use(cors());
server.use(express.json());

// routes
server.get("/", (req, res) => {
  
  res.send("elaiê");
});
server.use('/users', userRoutes);

// database connect 
mongooseConnect(server);

// server listening
server.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
