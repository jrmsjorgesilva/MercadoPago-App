const router = require("express").Router();
// controllers
const createPayment = require("../controllers/payments/createPayment");
const getPayments = require("../controllers/payments/getPayments");
const getPaymentById = require("../controllers/payments/getPaymentById");
const updatePayment = require("../controllers/payments/updatePayment");
const deletePayment = require("../controllers/payments/deletePayment");

// POST
router.post("/", createPayment);

// GET
router.get("/", getPayments);

// GET by id
router.get("/:id", getPaymentById);

// PATCH
router.patch("/:id", updatePayment);

// DELETE
router.delete("/:id", deletePayment);

module.exports = router;
