const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();
const { checkToken } = require('../middleware/auth');

const TestController = require('./Test.controller');



// Signup

router.post('/signup', TestController.signup)

// Signin

router.post('/signin', TestController.signin)

// Signout

// Check Email or Phone

router.post('/check-email', TestController.checkEmailOrPhone);


module.exports = router;