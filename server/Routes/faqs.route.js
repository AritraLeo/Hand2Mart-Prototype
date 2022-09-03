const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();

const faqsController = require('../Controller/Faqs.controller');


// get FAQS:
router.get('/', faqsController.getFaqs);




module.exports = router;