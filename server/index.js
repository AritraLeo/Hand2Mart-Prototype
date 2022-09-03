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



const app = express();

const port = 5000


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Routing :-


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





app.listen(port, () => { console.log(`Listning at http://localhost:${port}`) });
