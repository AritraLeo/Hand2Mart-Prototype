const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();
const  auth  = require('../middleware/auth');

const DealerController = require('../Controller/Dealer.controller')

// Get all cars according to dealer

router.get('/getAllCars', DealerController.getAllCars);

router.get('/getAllBikes', DealerController.getAllBikes);

// Get car collection by dealer

router.get('/getCarByDealer/:email', DealerController.getCarByDealer);

router.get('/getBikeByDealer/:email', DealerController.getBikeByDealer);

// Sell a Car:

router.post('/sell/car/:email', auth, DealerController.sellCar);

// Sell a Bike:

router.post('/sell/bike/:email', DealerController.sellBike);


module.exports = router;
