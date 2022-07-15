const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("oieuki");
});

module.exports = router;
