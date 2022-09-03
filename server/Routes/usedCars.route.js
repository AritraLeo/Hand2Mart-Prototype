const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();


const UsedCarsController = require('../Controller/UsedCars.controller');


// to get all cars based on priority basic:
router.get('/', UsedCarsController.getCarByPriority);


// to get car by id:
router.get('/:id', UsedCarsController.getCarById);


module.exports = router;