require("dotenv").config();
const mongoose = require("mongoose");

// mongo (mongodb+srv://boilerplate:process.env.DB_PASSWORD@restapiboilerplateclust.5vrtx.mongodb.net/?retryWrites=true&w=majority)
module.exports = async function mongooseConnect(server) {
  const mongoUri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@restapiboilerplateclust.5vrtx.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(mongoUri);
    console.log("conectado com sucesso");
    return;
  } catch (error) {
    console.log("erro: ", error);
    throw new Error(error);
  }
};
