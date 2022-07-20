const router = require("express").Router();
// controller
const createUser = require('../controllers/users/createUser');
const getUsers = require('../controllers/users/getUsers');
const getUserById = require('../controllers/users/getUserById.js');
const updateUser = require('../controllers/users/updateUser');
const deleteUser = require('../controllers/users/deleteUser');

router.post("/", createUser);

router.get("/", getUsers);

router.get("/:id", getUserById);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
