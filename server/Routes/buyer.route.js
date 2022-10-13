const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();
const  auth  = require('../middleware/auth');

const DealerController = require('../Controller/Dealer.controller')

// Get all cars according to dealer

router.get('/getAll', DealerController.getAllCars);

// Get car collection by dealer

router.get('/getCarByDealer/:email', DealerController.getCarByDealer);


module.exports = router;