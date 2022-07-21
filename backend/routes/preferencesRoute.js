const router = require("express").Router();
// controllers
const createPreference = require('../controllers/preferences/createPreference');
const getPreferences = require('../controllers/preferences/getPreferences');
const getPreferenceById = require('../controllers/preferences/getPreferenceById');
const updatePreference = require('../controllers/preferences/updatePreference');
const deletePreference = require('../controllers/preferences/deletePreference');

// POST
router.post("/", createPreference);

// GET
router.get("/", getPreferences);

// GET By Id
router.get("/:id", getPreferenceById);

// PATCH
router.patch("/:id", updatePreference);

// DELETE
router.delete("/:id", deletePreference);

module.exports = router;
