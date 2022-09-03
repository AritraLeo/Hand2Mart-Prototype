const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();


const newCarsController = require('../Controller/NewCars.controller');


// All New cars by trend:

router.get('/', newCarsController.getCarByTrend);

// By id:

router.get('/:id', newCarsController.getCarById);


module.exports = router;
