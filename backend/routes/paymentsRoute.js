const router = require('express').Router();

router.post('/', async(req, res) => {
    res.send('hello');
})

module.exports = router;