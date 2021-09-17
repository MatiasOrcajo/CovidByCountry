const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const getData = new indexController();
const countries = getData.storeData();

router.get('/', (req, res) => {
    res.render('index', {paises: countries});
})

module.exports = router;