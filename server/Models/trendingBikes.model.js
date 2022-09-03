const dbConn = require('../db.config');


var TrendingBikes = (trendingBike) => {
    this.id = trendingBike.id;
    this.carName = trendingBike.carName;
    this.price = trendingBike.price;
    this.kms = trendingBike.kms;
    this.mileage = trendingBike.mileage;
    this.image = trendingBike.image;
    this.transmission = trendingBike.transmission;
    this.fuel = trendingBike.fuel;
    this.status = trendingBike.status;
    this.created_at = new Date();
    this.modified_at = new Date();
}


// get Reviews:
TrendingBikes.getAllBikes = (result) => {
    dbConn.query("SELECT * FROM trending_bikes WHERE status = ? ORDER BY rating DESC", 1, (err, res) => {
        if (err) {
            console.log('Error fetching Trending Bikes', err);
            result(null, err);
        } else {
            console.log('Success in fetching Trending Bikes');
            result(null, res);
        }
    })
}

TrendingBikes.getBikeById = (id, result) => {
    dbConn.query("SELECT * FROM trending_bikes WHERE id = ? AND status = 1", id, (err, res) => {
        if (err) {
            console.log("Error!", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = TrendingBikes;