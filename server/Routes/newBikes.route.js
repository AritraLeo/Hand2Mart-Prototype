const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();


const newBikesController = require('../Controller/NewBikes.controller');


// All New bikes by trend:

router.get('/', newBikesController.getBikeByTrend);

// By id:

router.get('/:id', newBikesController.getBikeById);


module.exports = router;
