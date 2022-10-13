const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();
const auth = require('../middleware/auth')


const UserController = require('../Controller/User.controller');

/* User as Seller  */

// to get all cars based on priority basic:
router.get('/sell/cars/:email', UserController.getListedCars);

router.get('/sell/car/:id/:email', UserController.getListedCarById);

// to get car by id:
router.get('/sell/bikes/:email', UserController.getListedBikes);

router.get('/sell/bike/:id/:email', UserController.getListedBikeById);

// Sell A Car :

router.post('/sell/car/:email', auth, UserController.sellCar);

// Sell A Bike :

router.post('/sell/bike/:email', auth, UserController.sellBike);


/* User as Buyer  */

router.post('/buy/car/:id/:type', auth, UserController.buyCar);

router.post('/buy/bike/:id/:type', auth, UserController.buyBike);



module.exports = router;