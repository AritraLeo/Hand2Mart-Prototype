require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const pool = require('./db');


// Imports of routes:
const reviews = require('./Routes/reviews.route');
const TrendingCars = require('./Routes/trendingCars.route');
const TrendingBikes = require('./Routes/trendingBikes.route');
const faqs = require('./Routes/faqs.route');
const usedCars = require('./Routes/usedCars.route');
const usedBikes = require('./Routes/usedBikes.route');
const newCars = require('./Routes/newCars.route');
const newBikes = require('./Routes/newBikes.route');
const footer = require('./Routes/footer.route');
const auth = require('./Routes/auth.router');
// Seller/Dealer :
const dealer = require('./Routes/dealer.route');
// Buyer :
const buyer = require('./Routes/buyer.route');

const test = require('./Tests/test.route');



const app = express();

const port = 5000 || process.env.PORT


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Routing :-

// Auth:

app.use('/api/auth', auth)


// Reviews:

app.use('/api/reviews', reviews);

// Trending Section:
app.use('/api/trendingCars', TrendingCars);
app.use('/api/trendingBikes', TrendingBikes);


// FAQ:

app.use('/api/faqs', faqs);


// Used Cars & Bikes:

app.use('/api/usedCars', usedCars);
app.use('/api/usedBikes', usedBikes);


// New Cars & Bikes:

app.use('/api/newCars', newCars);
app.use('/api/newBikes', newBikes);



// Footer:

app.use('/api/footer', footer);

/* Functions  */

// Seller :

    // Dealer:

        app.use('/api/dealer/', dealer);

    // Buyer :
        app.use('/api/buyer/', buyer);

// Test :
app.use('/api/tests', test);



app.listen(port, () => { console.log(`Listning at http://localhost:${port}`) });
