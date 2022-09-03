const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();

const reviewsController = require('../Controller/Review.controller');


// get Reviews:
router.get('/', reviewsController.getReviews);




module.exports = router;