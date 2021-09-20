const express = require('express');
const router = express.Router();

const IndexController = require('../controllers/IndexController');
const getIndexData = new IndexController();
const countries = getIndexData.storeData();



router.get('/', (req, res) => {
    res.render('index', {paises: countries});
})

router.get('/:id', (req, res) => {
    const country = getIndexData.getCountry(req.params.id);
    res.render('country', {pais: country});
})

module.exports = router;