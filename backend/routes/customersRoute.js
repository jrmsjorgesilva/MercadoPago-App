const router = require("express").Router();
// models
const Customer = require("../models/customerSchema");
// controllers
const createCustomer = require("../controllers/customers/createCustomer");
const getCustomers = require("../controllers/customers/getCustomers");
const getCustomerById = require("../controllers/customers/getCustomerById");
const deleteCustomer = require("../controllers/customers/deleteCustomer");
const updateCustomer = require("../controllers/customers/updateCustomer");

// POST
router.post("/", createCustomer);

// GET
router.get("/", getCustomers);

// GET individual customer
router.get("/:id", getCustomerById);

// PATCH id
router.patch("/:id", updateCustomer);

// DELETE by id
router.delete("/:id", deleteCustomer);

module.exports = router;
