const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();

const TrendingCarsController = require('../Controller/TrendingCars.controller');


// get Cars:
router.get('/', TrendingCarsController.getCars);

// get Car by id:
router.get('/:id', TrendingCarsController.getCarById);


module.exports = router;