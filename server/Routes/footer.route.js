const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();

const footerController = require('../Controller/Footer.controller');


// get FAQS:

router.get('/', footerController.getFooter);


router.get('/:cat', footerController.getFooterByParameter);


/*
// get Resources:

router.get('/:cat', footerController.getFooterByParameter);

// get Company:

router.get('/company', footerController.getFooterResources);

// get Support:

router.get('/support', footerController.getFooterResources);

// get Products:

router.get('/products', footerController.getFooterResources);

*/


module.exports = router;