const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();

const TrendingBikesController = require('../Controller/TrendingBikes.controller');


// get Reviews:
router.get('/', TrendingBikesController.getBikes);

// get Bike by id:
router.get('/:id', TrendingBikesController.getBikeById);


module.exports = router;