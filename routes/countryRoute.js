const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    console.log(req.body);
    res.render('country');
})

module.exports = router;