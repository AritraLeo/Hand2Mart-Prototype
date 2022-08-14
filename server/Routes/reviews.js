const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const pool = require('./db');
const router = express.Router();


router.get('/cars/:id', (req, res) => {

    pool.getConn
})

