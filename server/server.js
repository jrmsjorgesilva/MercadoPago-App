// import * as dotenv from "dotenv";
const express = require("express");
// import express from 'express';
const axios = require("axios")
// import axios from 'axios';
const cors = require("cors");
// import cors from 'cors';
const PORT = process.env.PORT || 8000;

const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("elaiê");
});

server.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
