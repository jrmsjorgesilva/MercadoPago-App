const router = require('express').Router();

router.get('/*', (req, res) => {
    res.send('Not Found Page');
})

module.exports = router;