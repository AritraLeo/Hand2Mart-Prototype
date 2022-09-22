const express = require('express');
// const bodyParser = require('body-parser');
const router = express.Router();
const { checkToken } = require('../middleware/auth');

const AuthController = require('../Controller/Auth.controller');



// Signup

router.post('/signup', AuthController.signup)

// Signin

router.post('/signin', AuthController.signin)

// Signout

// router.get('/signout', AuthController)


module.exports = router;