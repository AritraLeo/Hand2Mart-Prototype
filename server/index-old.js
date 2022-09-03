const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('mysql');
const pool = require('./db');

const app = express();

const port = 5000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// app.use('/reviews', require('./Routes/reviews'));


app.listen(port, () => { console.log(`Listning on port ${port}`) });
