const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();


const UsedBikesController = require('../Controller/UsedBikes.controller');


// to get all cars based on priority basic:
router.get('/', UsedBikesController.getBikeByPriority);


// to get car by id:
router.get('/:id', UsedBikesController.getBikeById);


module.exports = router;