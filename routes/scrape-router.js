const express = require('express');
const scrapeController =  require('../controller/scrapeController');

const router = express.Router();

// Add products to the db
router.get('/get-coin-market-data', scrapeController.getCoinMarketData);
router.get('/get-poo-coin-data', scrapeController.getPoocoinData);


module.exports = router;
